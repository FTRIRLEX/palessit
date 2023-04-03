import { FC } from 'react'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slider'
import styled from 'styled-components'
import colors from '../constants/colors'
import Icon from '../components/UI/Icon'

const Main: FC = () => {
  interface Card {
    id: number
    title: string
    description: string
    icon: string
  }

  const cards: Card[] = [
    {
      id: 1,
      title: 'Взрослое отделение',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate distinctio consectetur ipsa atque harum iure.',
      icon: 'pacman',
    },
    {
      id: 2,
      title: 'Детское отделение',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate distinctio consectetur ipsa atque harum iure.',
      icon: 'pacman',
    },
    {
      id: 3,
      title: 'Лабораторная',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate distinctio consectetur ipsa atque harum iure.',
      icon: 'pacman',
    },
  ]

  return (
    <>
      <Navbar />
      <Slideshow />
      <Content>
        <Title>Услуги</Title>
        <CardWrapper>
          {cards?.map((card) => (
            <Card key={card.id}>
              <IconWrapper>
                <Icon icon={card.icon} size={50} />
              </IconWrapper>
              <CardInfo>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardInfo>
            </Card>
          ))}
        </CardWrapper>
      </Content>
    </>
  )
}

const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
  margin-top: 30px;
`

const CardTitle = styled(Title)`
  font-size: 22px;
  margin: 0;
  margin-bottom: 15px;
  font-family: 'Inter Medium';
`

const CardDescription = styled.div`
  font-size: 18px;
  color: ${colors.spaceGray};
  font-family: 'Inter Medium';
`

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: auto;
  flex-direction: column;
  align-items: center;
`

const Card = styled.div`
  display: flex;
  width: 45%;
  height: 170px;
  border-radius: 10px;
  margin-bottom: 50px;
  box-shadow: 0 0 3px ${colors.spaceGray};
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px ${colors.spaceGray};
  }
`
const CardWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`
const IconWrapper = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const CardInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export default Main
