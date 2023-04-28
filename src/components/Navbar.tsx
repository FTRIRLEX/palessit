import { FC } from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
//import { useCustomSelector } from '../hooks/store'
//import { loginUser } from '../store/selectors'

const Navbar: FC = () => {
  //const { user } = useCustomSelector(loginUser)

  return (
    <Header>
      <Links href='/home'>
        <Logo src={require('../assets/img/logo.png')} />
      </Links>
      <LinksContainer>
        <Item>
          <Links href='/home'>Главная</Links>
        </Item>
        <Item>
          <Links href='/users'>Врачи</Links>
        </Item>
        {/* {user.user.email ? (
          <Item>
            <Links href='/profile'>Профиль</Links>
          </Item>
        ) : (
          <Item>
            <Links href='/login'>Войти</Links>
          </Item>
        )} */}
        <Item>
          <Links href='/profile'>Профиль</Links>
        </Item>
      </LinksContainer>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  background-color: ${colors.blue};
  width: 100%;
  height: 110px;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  display: flex;
  width: 250px;
  margin-left: 50px;
`;
const LinksContainer = styled.div`
  display: flex;
  margin-right: 50px;
`;

const Links = styled.a`
  color: ${colors.white};
  font-size: 20px;
  padding: 5px 0px;
  margin: 0px 30px;
  font-weight: 500;
  transition: all 0.5s ease;
  text-decoration: none;
  &:hover {
    color: ${colors.orange};
  }
`;
const Item = styled.li`
  list-style-type: none;
`;

export default Navbar;
