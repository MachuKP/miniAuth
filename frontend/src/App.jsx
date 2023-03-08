import Navbar from './components/Navbar'
import './App.scss'
import DailyLog from './pages/DailyLog'
import Login from './pages/Login'
import { useState } from 'react'
import {
  Route,
  Routes
} from "react-router-dom";
import Register from './pages/Register'

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true)
  }

  const handleLogout = () => {
    setIsLogin(false)
  }

  return (
    <div className="App">
        <Navbar isLogin={isLogin} handleLogout={handleLogout} />
        <Routes>
          <Route path='/' element={isLogin ? <DailyLog handleLogout={handleLogout} /> : <Login handleLogin={handleLogin} />} />
          <Route path='/regist' element={<Register />} />
        </Routes>
    </div>
  )
}

export default App
