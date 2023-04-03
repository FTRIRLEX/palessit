import { FC } from 'react'
import colors from '../../constants/colors'
import styled from 'styled-components'
import EditableText from '../../components/UI/EditableText'

const ProfileInfo: FC = () => {
  const user = {
    email: 'egorchik002@mail.ru',
    name: 'Egor',
    secondName: 'Moroz',
    nickname: '12345',
    birthday: '30.06.2002',
    about: 'my name is egor',
  }
  return (
    <div>
      <Title>Обо мне</Title>
      <Container>
        <Item>
          <StyledLabel>Email:</StyledLabel>
          <EditableText text={user.email} />
        </Item>
        <Item>
          <StyledLabel>Имя:</StyledLabel>
          <EditableText text={user.name} />
        </Item>
        <Item>
          <StyledLabel>Фамилия:</StyledLabel>
          <EditableText text={user.secondName} />
        </Item>
        <Item>
          <StyledLabel>День рождения:</StyledLabel>
          <EditableText text={user.birthday} />
        </Item>
        <Item>
          <StyledLabel>Email:</StyledLabel>
          <EditableText text={user.about} />
        </Item>
      </Container>
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
const Item = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  width: 300px;
  font-size: 18px;
  padding-bottom: 8px;
  color: ${colors.spaceGray};
  font-family: 'Inter Medium';
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 0;
`

export default ProfileInfo
