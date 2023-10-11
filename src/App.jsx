import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import './App.css'
import Navbar from './reusable/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
