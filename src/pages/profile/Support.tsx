import React from 'react'
import styled from 'styled-components'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/Input'
import colors from '../../constants/colors'

const Support = () => {
  return (
    <>
      <Title>Служба поддержки</Title>
      <StyledLabel>Адрес электронной почты для ответа:</StyledLabel>
      <SupportInput icon='mail4' type='email' placeholder='Email Address' />
      <StyledLabel>Опишите проблему:</StyledLabel>
      <MessageArea />
      <SendButton text='Отправить' />
    </>
  )
}

const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Inter Bold';
`

const SupportInput = styled(Input)`
  border: 2px solid ${colors.blue};
  border-radius: 5px;
  font-size: 18px;
`
const MessageArea = styled.textarea`
  max-width: 80%;
  min-width: 300px;
  font-size: 18px;
  min-height: 400px;
  max-height: 500px;
  border: 2px solid ${colors.blue};
  border-radius: 5px;
  font-family: 'Inter Medium';
  padding: 10px;
`

const StyledLabel = styled.label`
  width: auto;
  font-size: 18px;
  padding-bottom: 8px;
  color: ${colors.spaceGray};
  font-family: 'Inter Medium';
`

const SendButton = styled(Button)`
  margin-top: 30px;
  background-color: ${colors.orange};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  width: 200px;
`

export default Support
