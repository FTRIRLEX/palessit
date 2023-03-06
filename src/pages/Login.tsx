import {FC} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../UI/Button'
import Input from '../UI/Input'

const Login: FC = () => {
  const navigate = useNavigate()
  return (
      <LoginWrapper>
        <StyledContainer>
          <ImgContainer/>
          <BorderText>
            Login to your account and be a member of our community. You can be informed of our latest events and contests and use our discounts to participate.
          </BorderText>
        </StyledContainer>
        <StyledContainer>
          <Title>
            Wellcome Back
          </Title>
          <StyledText>
            Enter your email address and password below to login to your account.
          </StyledText>
          <Input type='Email Adres' placeholder='email'/>
          <Input type='Password' placeholder='password'/>
          <Button text='Login' style={{color:'white', backgroundColor:'purple', marginBottom: '15px'}}/>
          <StyledText style={{color: 'spacegray', marginBottom: '15px'}}>
            Or
          </StyledText>
          <Button text='Login With Gmail' style={{color:'purple'}}/>
          <Button text='Login With Apple' style={{color:'purple'}}/>
          <BtnGroup>
            <Button 
            onClick={() => {
              navigate('/registration')
            }} 
            text='Create Account' style={{color:'white', backgroundColor:'purple', width: '45%', fontSize: '12px'}}/>
            <Button text='Forgot Password' style={{color:'purple', width: '45%', fontSize: '12px'}}/>
          </BtnGroup>
        </StyledContainer>
      </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`
const StyledContainer = styled.div`
  display: flex;
  background-color: #EEDC82;
  width: 40%;
  height: 90vh;
  border-radius: 25px;
  box-shadow: 7px 7px 2px 1px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  background-image: url('../img/yuno.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
`

const BorderText = styled.div`
  display: flex;
  width: 80%;
  height: 20%;
  border-left: 5px purple solid;
  border-right: 5px purple solid;
  font-size: 20px;
  align-items: center;
  text-align: center;
  padding: 30px;
`

const StyledText = styled.div`
  display: flex;
  text-align: center;
  margin-bottom: 30px;
`

const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
`
const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
`

export default Login

