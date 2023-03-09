//component
import Navbar from './components/Navbar'
//style
import './App.scss'
//pugin
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//route
import { useState } from 'react'
import {
  Route,
  Routes
} from "react-router-dom";
//page
import DailyLog from './pages/DailyLog'
import Login from './pages/Login'
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
          <Route path='/register' element={<Register />} />
        </Routes>
        <ToastContainer />
    </div>
  )
}

export default App
