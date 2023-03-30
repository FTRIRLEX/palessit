import { FC } from 'react'
import styled from 'styled-components'
import Tabs from '../../components/Tabs'
import Navbar from '../../components/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import ProfileInfo from './ProfileInfo'

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
            </Routes>
          </Content>
        </Container>
      </Body>
    </>
  )
}

const Body = styled.div`
  //margin-top: 80px;
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
  @media (max-width: 1280px) {
    width: 100%;
  }
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
