import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { Route, Routes, useParams } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import SubMenu from './components/SubMenu/SubMenu'

function App() {
  const [count, setCount] = useState(0)
  const language = useSelector((state) => state.language)
  const {path} = useParams()
  console.log(path);

  return (
  <div className='app_main'>
    <Routes>
      <Route path='/submenu' element={<SubMenu/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
  <Navbar/>
  <Footer/>
    
  </div>
  )
}

export default App
