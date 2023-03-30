import { FC } from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import colors from '../../constants/colors'
import styled from 'styled-components'

const ProfileInfo: FC = () => {
  return (
    <div>
      <Title>Обо мне</Title>
      <StyledLabel>Enter Your Name:</StyledLabel>
      <InputContainer>
        <InfoInput type='Name' placeholder='Name' />
        <InfoInput
          type='Second Name'
          placeholder='Second Name'
          style={{ marginLeft: '15px' }}
        />
        <ConfirmButton text='OK' />
      </InputContainer>
      <StyledLabel>Nickname:</StyledLabel>
      <InputContainer>
        <InfoInput type='nickname' placeholder='nickname' />
        <ConfirmButton text='OK' />
      </InputContainer>
      <StyledLabel>Birthday:</StyledLabel>
      <InputContainer>
        <InfoInput type='date' placeholder='dd.mm.yyyy' />
        <ConfirmButton text='OK' />
      </InputContainer>
      <StyledLabel>About me:</StyledLabel>
      <InputContainer>
        <TextArea placeholder='About you' />
        <ConfirmButton text='OK' />
      </InputContainer>
    </div>
  )
}

const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Inter Bold';
`

const StyledLabel = styled.label`
  width: 300px;
  font-size: 18px;
  padding-left: 5px;
  padding-bottom: 8px;
  font-family: 'Inter Medium';
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
const InfoInput = styled(Input)`
  border-radius: 3px;
  border: 1px solid ${colors.spaceGray};
  height: 40px;
  font-family: 'Inter Medium';
  width: 40%;
`
const ConfirmButton = styled(Button)`
  height: 40px;
  background-color: ${colors.orange};
  margin-left: 15px;
  color: ${colors.white};
  width: auto;
  border-radius: 3px;
  font-family: 'Inter Medium';
  border: none;
`
const TextArea = styled.textarea`
  width: 80%;
  height: 40px;
  max-width: 80%;
  border-radius: 3px;
  border: 1px solid ${colors.spaceGray};
  height: 40px;
  //font-size: 18px;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 25px;
  text-indent: 7px;
  font-family: 'Inter Medium';
  align-items: center;
  &:hover {
    cursor: pointer;
    border-color: ${colors.black};
  }
`

export default ProfileInfo
