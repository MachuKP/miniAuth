//component
import Navbar from './components/Navbar'
//style
import './App.scss'
//pugin
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//route
import {
  Route,
  Routes
} from "react-router-dom";
//page
import DailyLog from './pages/DailyLog'
import Login from './pages/Login'
import Register from './pages/Register'
//redux
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="App">
        <Navbar isLogin={user} />
        <Routes>
          <Route path='/' element={user ? <DailyLog /> : <Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <ToastContainer />
    </div>
  )
}

export default App
