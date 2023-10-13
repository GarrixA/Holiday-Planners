import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import './App.css'
import Navbar from './reusable/Navbar'
import './index.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navbar/>
    
    
    </div>
    </>
  )
}

export default App
