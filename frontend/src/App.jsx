import Navbar from './UI/Navbar'
import './App.scss'
import DailyLog from './pages/DailyLog'
import Login from './pages/Login'
import { useState } from 'react'

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
      {isLogin ? <DailyLog handleLogout={handleLogout} /> : <Login handleLogin={handleLogin} />}
    </div>
  )
}

export default App
