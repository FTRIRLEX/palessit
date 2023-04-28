import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import UserPage from './pages/profile/UserPage'
import Main from './pages/Main'
import Users from './pages/Users'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/profile/*' element={<UserPage />} />
        <Route path='/home' element={<Main />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
