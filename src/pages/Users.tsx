import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import colors from '../constants/colors';
import { UserResponseDto, fetchUsers } from '../services/FetchUsers';

const tabs: string[] = [
  'Аллергологи',
  'Дерматологи',
  'Кардиологи',
  'Логопеды',
  'Мамологи',
  'Массаж',
  'Логопеды',
  'Хирургия',
];

const Users: FC = () => {
  const [users, setUsers] = useState<UserResponseDto[]>([]);

  useEffect(() => {
    (async () => {
      const arr = await fetchUsers.getUsers();
      setUsers(arr);
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <Title>Список врачей</Title>
      <Content>
        <Container>
          <Tabs>
            {tabs?.map((tab, index) => (
              <TabsItem key={index + 1}>{tab}</TabsItem>
            ))}
          </Tabs>
          <CardWrapper>
            {users.map((user: UserResponseDto) => (
              <Card key={user.id}>
                <CardImg src={require('../assets/img/avatar.png')} />
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.username}</CardDescription>
                <CardDescription>{user.email}</CardDescription>
                <CardDescription>{user.phone}</CardDescription>
              </Card>
            ))}
          </CardWrapper>
        </Container>
      </Content>
    </div>
  );
};

const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Ubuntu Regular';
  margin-top: 50px;
  margin-left: 30%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

const Content = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
const Tabs = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  border-bottom: 1px solid ${colors.sweetGray};
  height: 340px;
  margin-top: 15px;
  justify-content: flex-end;
`;

const TabsItem = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-family: 'Ubuntu Regular';
  border: 1px solid ${colors.sweetGray};
  border-bottom: none;
  &:hover {
    cursor: pointer;
    background-color: ${colors.sweetGray};
  }
`;

const CardWrapper = styled.div`
  display: flex;
  width: 80%;
  margin-left: 30px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  width: 250px;
  height: 350px;
  border: 1px solid black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 15px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px ${colors.spaceGray};
  }
`;

const CardImg = styled.img`
  width: 175px;
  height: 175px;
  margin-bottom: 10px;
  transition: 0.5s ease all;
  &:hover {
    transform: scale(1.1);
  }
`;

const CardTitle = styled.div`
  display: flex;
  font-size: 18px;
  font-family: 'Ubuntu Regular';
`;

const CardDescription = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 16px;
  color: ${colors.spaceGray};
`;

export default Users;
