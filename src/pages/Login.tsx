import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import colors from '../constants/colors';
import { useCustomDispatch, useCustomSelector } from '../hooks/store';
import { loginUser } from '../store/selectors';
import { fetchUser } from '../store/thunk/fetchUser';
import { useNavigate } from 'react-router-dom';
import { UserLogin } from '../store/thunk/fetchUser';

const Login: FC = () => {
  const dispatch = useCustomDispatch();
  const { user, response } = useCustomSelector(loginUser);
  const [userData, setUserData] = useState<UserLogin>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  // const userData = {
  //   email: 'egorchik002@mail.ru',
  //   password: '30132805',
  // };

  useEffect(() => {
    if (response.status === 202) {
      console.log(user);
      navigate('/home');
    }
  }, [response.status]);

  return (
    <LoginWrapper>
      <Container style={{ marginRight: '20px' }}>
        <Image src={require('../assets/img/loginImage.png')} />
        <BorderedText>
          Login to your account and be a member of our community. You can be
          informed of our latest events and contests and use our discounts to
          participate.
        </BorderedText>
      </Container>
      <Container style={{ marginLeft: '20px' }}>
        <Title>Welcome Back</Title>
        <Text>
          Enter your email address and password below to login to your account.
        </Text>
        <Input
          icon='mail4'
          iconStyle={{ marginRight: '10px' }}
          type='Email Address'
          placeholder='email'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, email: e.target.value })
          }
          value={userData.email}
        />
        <Input
          icon='key'
          iconStyle={{ marginRight: '10px' }}
          type='Password'
          placeholder='password'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, password: e.target.value })
          }
          value={userData.password}
        />
        <Button
          text='Login'
          onClick={async () => {
            await dispatch(fetchUser(userData));
          }}
          style={{
            color: colors.white,
            backgroundColor: colors.purple,
            marginBottom: '15px',
          }}
        />
        <Text style={{ color: colors.spaceGray, marginBottom: '15px' }}>
          <hr style={{ width: '30%', marginRight: '10px' }} />
          or
          <hr style={{ width: '30%', marginLeft: '10px' }} />
        </Text>
        <Button
          icon='google'
          iconStyle={{ marginRight: '10px' }}
          text='Login With Gmail'
          style={{ color: colors.purple }}
        />
        <Button
          iconStyle={{ marginRight: '10px' }}
          icon='appleinc'
          text='Login With Apple'
          style={{ color: colors.purple }}
        />
        <ButtonContainer>
          <Button
            text='Create Account'
            style={{
              color: colors.white,
              backgroundColor: colors.purple,
              width: '45%',
              fontSize: '12px',
            }}
            onClick={() => {
              navigate('/registration');
            }}
          />
          <Button
            text='Forgot Password'
            style={{
              color: colors.purple,
              width: '45%',
              fontSize: '12px',
              border: 'none',
            }}
          />
        </ButtonContainer>
      </Container>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  background-color: ${colors.yellow};
  width: 40%;
  height: 90vh;
  border-radius: 25px;
  box-shadow: 7px 7px 2px 1px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Image = styled.img`
  display: flex;
  width: auto;
  height: 60%;
`;

const Text = styled.div`
  display: flex;
  text-align: center;
  margin-bottom: 30px;
  width: 400px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
`;

const BorderedText = styled(Text)`
  width: 80%;
  height: 20%;
  border-left: 5px purple solid;
  border-right: 5px purple solid;
  padding: 30px;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
`;

export default Login;
