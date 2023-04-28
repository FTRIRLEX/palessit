import { FC } from 'react';
import styled from 'styled-components';
import Icon from './UI/Icon';
import colors from '../constants/colors';
import Button from './UI/Button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWindow: FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Blur
      onClick={() => {
        onClose();
      }}
    >
      <Form
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Header>
          <Title>Добавить карту</Title>
          <CloseWIndow
            style={{ alignSelf: 'end', cursor: 'pointer' }}
            onClick={() => {
              onClose();
            }}
          >
            <Icon icon='cross' color={colors.black} />
          </CloseWIndow>
        </Header>
        <Content>
          <StyledLabel>Имя держателя: </StyledLabel>
          <EditInput placeholder='Имя держателя' />
          <StyledLabel>Номер карты: </StyledLabel>
          <EditInput placeholder='Номер карты' />
          <SaveButton
            text='Добавить'
            onClick={() => {
              onClose();
            }}
          />
        </Content>
      </Form>
    </Blur>
  );
};

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLabel = styled.label`
  width: 300px;
  font-size: 18px;
  padding-bottom: 8px;
  color: ${colors.black};
  font-family: 'Ubuntu Regular';
  margin-top: 15px;
`;

const SaveButton = styled(Button)`
  margin-top: 30px;
  background-color: ${colors.orange};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  width: 200px;
`;

const Content = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  height: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const EditInput = styled.input`
  border: 2px solid ${colors.blue};
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  background: transparent;
  width: 300px;
  height: 30px;
  text-align: left;
  padding-left: 10px;
  text-indent: 7px;
  font-family: 'Ubuntu Regular';
  align-items: center;
  &:hover {
    cursor: pointer;
    border-color: ${colors.black};
  }
`;

const Form = styled.form`
  display: flex;
  position: fixed;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px black;
  width: 400px;
  height: 300px;
`;
const Blur = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;
const Title = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Ubuntu Regular';
`;
const CloseWIndow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ModalWindow;
