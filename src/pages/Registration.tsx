import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import colors from '../constants/colors';
import { useCustomDispatch, useCustomSelector } from '../hooks/store';
import { registerUserThunk } from '../store/thunk/registerUser';
import { registerUser } from '../store/selectors';
import { useNavigate } from 'react-router-dom';
import { UserLogin } from '../store/thunk/registerUser';

const Registration: FC = () => {
  const dispatch = useCustomDispatch();
  const { user, response } = useCustomSelector(registerUser);
  const [userData, setUserData] = useState<UserLogin>({
    email: '',
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  // const userData = {
  //   email: 'asdasdaasssaassaasadsas@mail.ru',
  //   password: '30a132805',
  //   username: 'asdasdasdas',
  // };

  useEffect(() => {
    if (response.status === 201) {
      console.log(user);
      navigate('/home');
    }
  }, [response.status]);

  return (
    <RegistrationWrapper>
      <Container style={{ marginRight: '20px' }}>
        <Image src={require('../assets/img/registerImage.png')} />
        <BorderedText>
          We welcome your arrival. You can use the special discounts for the
          first ones after joining.
          <a href='/login'>
            <Button
              text='Back To Login'
              style={{
                width: 'auto',
                marginTop: '20px',
                color: colors.white,
                backgroundColor: 'purple',
              }}
            />
          </a>
        </BorderedText>
      </Container>
      <Container style={{ marginLeft: '20px' }}>
        <Title>Create Account</Title>
        <Text>
          Enter your email address, password and workplace below to sign up.
        </Text>
        <StyledLabel>Enter Your Email:</StyledLabel>
        <Input
          icon='mail4'
          iconStyle={{ marginRight: '10px' }}
          type='email'
          placeholder='Email Address'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, email: e.target.value })
          }
          value={userData.email}
        />
        <StyledLabel>Username:</StyledLabel>
        <Input
          icon='user-tie'
          iconStyle={{ marginRight: '10px' }}
          type='field'
          placeholder='Field'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, username: e.target.value })
          }
          value={userData.username}
        />
        <StyledLabel>Enter Your Password:</StyledLabel>
        <Input
          icon='key'
          iconStyle={{ marginRight: '10px' }}
          type='password'
          placeholder='Password'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, password: e.target.value })
          }
          value={userData.password}
        />
        <Button
          text='Sign Up'
          style={{ color: colors.white, backgroundColor: colors.purple }}
          onClick={async () => {
            await dispatch(registerUserThunk(userData));
          }}
        />
        <Button
          icon='google'
          iconStyle={{ marginRight: '10px' }}
          text='Sign Up With Gmail'
          style={{ color: colors.purple }}
        />
        <Button
          icon='appleinc'
          iconStyle={{ marginRight: '10px' }}
          text='Sign Up With Apple'
          style={{ color: colors.purple }}
        />
      </Container>
    </RegistrationWrapper>
  );
};

const RegistrationWrapper = styled.div`
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
`;

const StyledLabel = styled.label`
  width: 300px;
  font-size: 18px;
  padding-left: 10px;
  padding-bottom: 5px;
`;
const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  display: flex;
  width: auto;
  height: 60%;
  align-items: center;
  text-align: center;
  font-size: 20px;
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

export default Registration;
