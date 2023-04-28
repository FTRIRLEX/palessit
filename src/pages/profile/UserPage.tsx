import { FC } from 'react'
import styled from 'styled-components'
import Tabs from '../../components/Tabs'
import Navbar from '../../components/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import ProfileInfo from './ProfileInfo'
import Appointments from './Appointments'
import Support from './Support'
import Payment from './Payment'

const UserPage: FC = () => {
  return (
    <>
      <Navbar />
      <Body>
        <Container>
          <Menu>
            <Tabs />
          </Menu>
          <Content>
            <Routes>
              <Route
                path='/'
                element={<Navigate to='/profile/info' replace={false} />}
              />
              <Route path='/info' element={<ProfileInfo />} />
              <Route path='/appointments' element={<Appointments />} />
              <Route path='/support' element={<Support />} />
              <Route path='/payment' element={<Payment />} />
            </Routes>
          </Content>
        </Container>
      </Body>
    </>
  )
}

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 70px;
`

const Container = styled.div`
  display: flex;
  width: 80%;
  min-height: 100vh;
  justify-content: center;
  align-items: flex-start;
`
const Menu = styled.div`
  display: flex;
  width: 25%;
`

const Content = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
`

export default UserPage
