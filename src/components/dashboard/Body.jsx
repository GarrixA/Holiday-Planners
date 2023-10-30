import React from 'react';
import './body.css';
import imageA from '../../images/10001.png'
import { Link, Outlet } from 'react-router-dom';
import popular from './Popular';
import {TbLayoutDashboard} from 'react-icons/tb';
import {SlPlane} from 'react-icons/sl';
import {MdEventRepeat} from 'react-icons/md';
import {SlCalender} from 'react-icons/sl';
import {AiFillMessage} from 'react-icons/ai';
import Tours from './Tours';
import {BiLogInCircle} from 'react-icons/bi'




function Body() {
  return (
    <div className='body'>
        <div className="right-box">
            <div className="profile">
                <img src={imageA} alt="img" />
            </div>
            <div className="right-text">
              <h1>Main menu</h1>
            </div>
            <div className="links">
                <Link ><span><TbLayoutDashboard/> Dashboard</span></Link>
                <Link to="./Tours"><span><SlPlane />Tour</span></Link>
                <Link ><MdEventRepeat /><span>Bookings</span></Link>
                <Link><SlCalender/><span>Calender</span></Link>
                <Link ><span><AiFillMessage />Chat</span></Link>
            </div>
            <div className="pop">
              <p>Popular</p>
            <div className="popular">
            {
          popular.map(popu =>(
            <div key={popu.id} >
                <div className='popul'>
                  <img src={popu.image} alt="img" />
                  <p >{popu.country}</p>
              </div>
            </div>
            
          ))
        }
        <p style={{
          margin: '14px',
          fontSize: '18px',
        }}>show more</p>
          </div>
        </div>
            <div className="logout">
                <h1 style={{
                  fontSize: '18px',
                  marginLeft: '1rem',
                  marginTop: '2rem',
                  backgroundColor: '#c29d59',
                  width: '100px',
                  textAlign: 'center',
                  padding: '4px',
                  color: '#fff',
                  display: 'flex',
                  gap: '5px',
                  borderRadius: '4px'
                }}><BiLogInCircle/> logout</h1>
            </div>
        </div>

        <div className="left-box">
            <Outlet/>

          </div>
      </div>
  )
}

export default Body
