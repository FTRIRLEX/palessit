import { FC, useState } from 'react';
import colors from '../../constants/colors';
import styled from 'styled-components';
import Button from '../../components/UI/Button';

const ProfileInfo: FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('egorchik002@mail.ru');
  const [name, setName] = useState<string>('Егор');
  const [surname, setSurname] = useState<string>('Мороз');

  return (
    <div>
      <Title>Обо мне</Title>
      <Container>
        <Item>
          <StyledLabel>Элетронная почта:</StyledLabel>
          <EditInput
            type='email'
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEditing(true);
            }}
            defaultValue={email}
          />
        </Item>
        <Item>
          <StyledLabel>Имя:</StyledLabel>
          <EditInput
            type='text'
            onChange={(e) => {
              setName(e.target.value);
              setIsEditing(true);
            }}
            defaultValue={name}
          />
        </Item>
        <Item>
          <StyledLabel>Имя:</StyledLabel>
          <EditInput
            type='text'
            onChange={(e) => {
              setSurname(e.target.value);
              setIsEditing(true);
            }}
            defaultValue={surname}
          />
        </Item>
      </Container>
      <EditButton onClick={() => setIsEditing(false)} text='Сохранить' />
    </div>
  );
};

const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Ubuntu Regular';
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  width: 300px;
  font-size: 18px;
  padding-bottom: 8px;
  color: ${colors.spaceGray};
  font-family: 'Ubuntu Regular';
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 0;
`;

const EditButton = styled(Button)`
  margin-top: 20px;
  background-color: ${colors.orange};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  width: 200px;
  margin-top: 0px;
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
  margin-bottom: 15px;
`;

export default ProfileInfo;
