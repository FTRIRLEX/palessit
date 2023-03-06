import {FC} from 'react'
import styled from 'styled-components'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'

const Registration: FC = () => {
  const navigate = useNavigate()
  return (
    <RegistrationWrapper>
      <StyledContainer>
        <ImgContainer/>
        <BorderText>
          We welcome your arrival. You can use the special discounts for the first ones after joining.
          <Button 
          onClick={() => {
            navigate('/login')
          }} 
          text='Back To Login' style={{width:'auto', marginTop: '20px', color:'white', backgroundColor:'purple'}}/>
        </BorderText>
      </StyledContainer>
      <StyledContainer>
        <Title>
          Create Account
        </Title>
        <StyledText>
          Enter your email address, password and Workfield below to sign up.
        </StyledText>
        <StyledLabel>Enter Your Email:</StyledLabel>
        <Input type='email' placeholder='Email Adress'/>
        <StyledLabel>Work or Study Field:</StyledLabel>
        <Input type='field' placeholder='Field'/>
        <StyledLabel>Enter Your Password:</StyledLabel>
        <Input type='password' placeholder='Password'/>
        <Button text='Login' style={{color:'white', backgroundColor:'purple'}}/>
        <Button text='Login With Gmail' style={{color:'purple'}}/>
        <Button text='Login With Apple' style={{color:'purple'}}/>
      </StyledContainer>
    </RegistrationWrapper>
  )
}

const RegistrationWrapper = styled.div`
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
`

const StyledLabel = styled.label`
  width: 300px;
  font-size: 20px;
`
const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
`
const StyledText = styled.div`
  display: flex;
  text-align: center;
  margin-bottom: 30px;
  width: 400px;
`

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  background-image: url('../img/kawaii.png');
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
  flex-direction: column;
`

export default Registration
