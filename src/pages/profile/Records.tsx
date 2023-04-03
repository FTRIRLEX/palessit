import { FC } from 'react'
import styled from 'styled-components'

const Records: FC = () => {
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
      doctor: 'отолоринголог',
      doctorName: 'Пушкин А.В.',
      status: 'Активна',
    },
  ]
  return (
    <>
      <Title>Записи</Title>
      {Records?.map((record) => (
        <RecordWrapper key={record.id}>
          <div>
            <strong>Время: {record.date}</strong>
            <div>Врач: {record.doctor}</div>
            <div>Фамилия врача: {record.doctorName}</div>
          </div>
          <div>
            <h3>{record.status}</h3>
          </div>
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
  font-family: 'Inter Bold';
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

export default Records
