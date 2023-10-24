import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import About from './components/About'
import Layout from './components/Layout'
import Home from './components/Home'
import Nopage from './components/Nopage';
import Contacts from './components/Contacts';
import OnePage from './components/OnePage';
import TourList from './components/TourList';
import Login from './components/users/Login';
import ResetP from './components/users/ResetP';
import SignUp from './components/users/SidgnUp'
import Body from './components/dashboard/Body';
import Tours from './components/dashboard/Tours';

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contacts" element={<Contacts/>}/>
          <Route path="OnePage" element={<OnePage/>}/>
          <Route path="TourList" element={<TourList/>}/>
          <Route path="ResetP" element={<ResetP/>}/>
          <Route path="*" element={<Nopage/>}/>
          
      </Route>

      <Route path="Login" element={<Login/>}/>
          <Route path="SignUp" element={<SignUp/>}/>
      <Route path='/Body' element={<Body/>}>
        <Route path='Tours' element={<Tours/>}/>
      </Route>

      
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
