import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About'
import Layout from './components/Layout'
import Home from './components/Home'
import Nopage from './components/Nopage';
import Contacts from './components/Contacts';




function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contacts" element={<Contacts/>}/>
          <Route path="*" element={<Nopage/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
