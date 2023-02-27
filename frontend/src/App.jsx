import Navbar from './UI/Navbar'
import './App.scss'
import Greeting from './pages/Greeting'
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
      {isLogin ? <Greeting handleLogout={handleLogout} /> : <Login handleLogin={handleLogin} />}
    </div>
  )
}

export default App
