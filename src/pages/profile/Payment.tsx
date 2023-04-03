import { FC } from 'react'
import styled from 'styled-components'
import Button from '../../components/UI/Button'
import Icon from '../../components/UI/Icon'
import colors from '../../constants/colors'

const Payment: FC = () => {
  interface CreditCard {
    id: number
    name: string
    icon: string
    lastNumbers: string
  }

  const CreditCards: CreditCard[] = [
    { id: 1, icon: 'credit-card', name: 'YAHOR MAROZ', lastNumbers: '5631' },
    {
      id: 2,
      icon: 'credit-card',
      name: 'ARSENI KRAVZHUL',
      lastNumbers: '1122',
    },
    {
      id: 3,
      icon: 'credit-card',
      name: 'DZMITRI SAMASEIKA',
      lastNumbers: '6622',
    },
  ]
  return (
    <>
      <Title>Способы оплаты</Title>
      <AddButton text='Добавить' />
      {CreditCards?.map((card) => (
        <Card key={card.id}>
          <Icon icon={card.icon} />
          <StyledLabel>{card.name}</StyledLabel>
          <StyledLabel>{card.lastNumbers}</StyledLabel>
          <Icon color={colors.orange} icon='bin' />
        </Card>
      ))}
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

const Card = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid ${colors.spaceGray};
  height: 50px;
  border-radius: 5px;
  margin-bottom: 20px;
`

const StyledLabel = styled.label`
  width: 200px;
  font-size: 18px;
  padding-bottom: 8px;
  color: ${colors.spaceGray};
  font-family: 'Inter Medium';
`
const AddButton = styled(Button)`
  background-color: ${colors.orange};
  border: none;
  width: 100px;
  font-size: 16px;
  color: ${colors.white};
  margin-left: calc(80% - 100px);
`

export default Payment
