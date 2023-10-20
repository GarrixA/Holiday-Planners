import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About'
import Layout from './components/Layout'
import Home from './components/Home'
import Nopage from './components/Nopage';
import Contacts from './components/Contacts';
import Trending from './components/Trending';
import OnePage from './components/OnePage';
import TourList from './components/TourList';
import Login from './components/users/Login';
import Signup from './components/users/Signup';
import ResetP from './components/users/ResetP';
import Body from './components/dashboard/Body';
import CallTable from './components/table/TableArray';
import Tour from './components/dashboard/Tour';
import TableArray from './components/table/TableArray';

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
          <Route path="Signup" element={<Signup/>}/>
          <Route path="ResetP" element={<ResetP/>}/>
          
          <Route path="*" element={<Nopage/>}/>
      </Route>
        <Route path="Body" element={<Body/>}/>
        {/* <TableArray/> */}
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
