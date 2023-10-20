import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import About from './components/About'
import Layout from './components/Layout'
import Home from './components/Home'
import Nopage from './components/Nopage';
import Contacts from './components/Contacts';
import Trending from './components/Trending';
import OnePage from './components/OnePage';
import TourList from './components/TourList';
import Login from './components/users/Login';
import ResetP from './components/users/ResetP';
import Body from './components/dashboard/Body';
import SignUp from './components/users/SidgnUp'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contacts" element={<Contacts/>}/>
          <Route path="Trending" element={<Trending/>} />
          <Route path="OnePage" element={<OnePage/>}/>
          <Route path="TourList" element={<TourList/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="SignUp" element={<SignUp/>}/>
          <Route path="ResetP" element={<ResetP/>}/>
          <Route path="*" element={<Nopage/>}/>
          <Route path="Body" element={<Body/>}/> 
      </Route>
      <Route path="Body" element={<Body/>}/> 
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
