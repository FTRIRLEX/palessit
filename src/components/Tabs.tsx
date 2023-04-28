import { FC, useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import colors from '../constants/colors'
import Text from './UI/Text'
import Icon from './UI/Icon'

const Tabs: FC = () => {
  const location = useLocation()
  const [activeItem, setActiveItem] = useState<number | null>()

  interface Item {
    name: string
    icon: string
    link: string
  }

  const items: Item[] = [
    { icon: 'user', name: 'Обо мне', link: '/profile/info' },
    { icon: 'history', name: 'Записи', link: '/profile/appointments' },
    { icon: 'credit-card', name: 'Способы оплаты', link: '/profile/payment' },
    { icon: 'info', name: 'Служба поддержки', link: '/profile/support' },
    { icon: 'exit', name: 'Выход', link: '/login' },
  ]

  return (
    <Container>
      <Title>Профиль</Title>
      {items?.map((item, index) => (
        <ItemContainer key={item.name + item.link}>
          {index === items.length - 1 && <br />}
          <Item
            to={item.link}
            onMouseEnter={() => {
              setActiveItem(index)
            }}
            onMouseLeave={() => {
              setActiveItem(null)
            }}
          >
            <Icon
              icon={item.icon}
              color={
                location.pathname === item.link || index === activeItem
                  ? colors.orange
                  : colors.spaceGray
              }
            />
            <ItemText
              text={item.name}
              style={{
                color:
                  location.pathname === item.link || index === activeItem
                    ? colors.orange
                    : colors.spaceGray,
              }}
            />
          </Item>
        </ItemContainer>
      ))}
    </Container>
  )
}

const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Ubuntu Regular';
`

const Container = styled.div`
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 15px;
`

const Item = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

const ItemText = styled(Text)`
  margin-left: 8px;
  line-height: 16px;
  font-size: 18px;
  color: ${colors.spaceGray};
  margin-left: 10px;
  font-family: 'Ubuntu Regular';
`

export default Tabs
