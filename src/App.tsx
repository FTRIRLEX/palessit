import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import UserPage from './pages/profile/UserPage'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/profile/*' element={<UserPage/>}/>
      </Routes>
    </div>
  )
}

export default App
