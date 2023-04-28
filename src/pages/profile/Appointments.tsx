import { FC } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

const Appointments: FC = () => {
  interface Record {
    id: number
    date: string
    doctor: string
    status: string
    doctorName: string
  }
  const Records: Record[] = [
    {
      id: 1,
      date: '23.05.2023 15:20',
      doctor: 'кардиолог',
      doctorName: 'Заяц В.В.',
      status: 'Активна',
    },
    {
      id: 2,
      date: '23.05.2023 15:50',
      doctor: 'отоларинголог',
      doctorName: 'Пушкин А.В.',
      status: 'Активна',
    },
  ]
  return (
    <>
      <Title>Записи</Title>
      {Records?.map((record) => (
        <RecordWrapper key={record.id}>
          <Info>
            <StyledLabel>Время: {record.date}</StyledLabel>
            <StyledLabel>Врач: {record.doctor}</StyledLabel>
            <StyledLabel>Фамилия врача: {record.doctorName}</StyledLabel>
          </Info>
          <Status>{record.status}</Status>
        </RecordWrapper>
      ))}
    </>
  )
}

const Title = styled.div`
  display: flex;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Ubuntu Regular';
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  font-size: 18px;
  padding-bottom: 8px;
  color: ${colors.black};
  font-family: 'Ubuntu Regular';
`

const Status = styled(StyledLabel)`
  color: ${colors.spaceGray};
`

const RecordWrapper = styled.div`
  display: flex;
  padding: 15px;
  border: 2px solid darkblue;
  margin-bottom: 5px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`
export default Appointments
