import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/UI/Button';
import colors from '../../constants/colors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = () => {
  const [message, setMessage] = useState<string>();
  const [email, setEmail] = useState<string>();

  const clear = () => {
    setMessage('');
    setEmail('');
    toast('Сообщение отправлено!');
  };

  return (
    <>
      <Title>Служба поддержки</Title>
      <StyledLabel>Адрес электронной почты для ответа:</StyledLabel>
      <SupportInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        placeholder='Email Address'
      />
      <StyledLabel>Опишите проблему:</StyledLabel>
      <MessageArea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Суть описывать тута'
      />
      <SendButton text='Отправить' onClick={clear} />
      <ToastContainer />
    </>
  );
};

const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Ubuntu Regular';
`;

const SupportInput = styled.input`
  border: 2px solid ${colors.blue};
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  background: transparent;
  width: 300px;
  height: 30px;
  text-align: left;
  padding-left: 10px;
  text-indent: 7px;
  font-family: 'Ubuntu Regular';
  margin-bottom: 15px;
  align-items: center;
  &:hover {
    cursor: pointer;
    border-color: ${colors.black};
  }
`;
const MessageArea = styled.textarea`
  max-width: 80%;
  min-width: 300px;
  font-size: 16px;
  min-height: 400px;
  max-height: 500px;
  border: 2px solid ${colors.blue};
  border-radius: 5px;
  font-family: 'Inter Medium';
  padding: 10px;
`;

const StyledLabel = styled.label`
  width: auto;
  font-size: 18px;
  padding-bottom: 8px;
  color: ${colors.spaceGray};
  font-family: 'Ubuntu Regular';
`;

const SendButton = styled(Button)`
  margin-top: 30px;
  background-color: ${colors.orange};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  width: 200px;
`;

export default Support;
