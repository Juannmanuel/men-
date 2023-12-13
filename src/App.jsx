import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const language = useSelector((state) => state.language)
  console.log(language);

  return (
  <div className='app_main'>
    <h1>{language}</h1>
  </div>
  )
}

export default App
