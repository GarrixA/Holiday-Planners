import React from 'react';
import './body.css';
import imageA from './images/prof.png';
import { Link } from 'react-router-dom';
import popular from './Popular';
import {TbLayoutDashboard} from 'react-icons/tb';
import {MdLocationOn} from 'react-icons/md';
import {SlPlane} from 'react-icons/sl';
import {MdEventRepeat} from 'react-icons/md';
import {SlCalender} from 'react-icons/sl';
import {FaUmbrellaBeach} from 'react-icons/fa';
import {AiFillMessage} from 'react-icons/ai';
import CallTable from '../table/TableArray';




function Body() {
  return (
    <div className='body'>
        <div className="right-box">
            <div className="profile">
                <img src={imageA} alt="img" />
                <div className="text">
                    <h3>Garrix</h3>
                    <p>Aphrodis</p>
                </div>
            </div>
            <div className="links">
                <Link to={'./Dashboard'}><span><TbLayoutDashboard fontSize='1.3rem' /> Dashboard</span></Link>
                {/* <Link to={'./Places'}><span><MdLocationOn fontSize='1.7rem'/> Places</span></Link> */}
                <Link to={'./Tour'}><span><SlPlane fontSize='1.2rem'/>Tour</span></Link>
                <Link to={'./Upcomming'}><MdEventRepeat fontSize='1.4rem'/><span>Bookings</span></Link>
                {/* <Link to={'./Campus'}><FaUmbrellaBeach fontSize='1.3rem'/><span>Campus</span></Link> */}
                <Link to={'./Calendar'}><SlCalender/><span>Calender</span></Link>
                <Link to={'./Chat'}><span><AiFillMessage fontSize='1.4rem'/>Chat</span></Link>
            </div>
            <div className="pop">
              <p style={{
                fontSize: '1.3rem',
                margin: '12px',
              }}>Popular</p>
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
                  marginLeft: '3rem',
                  marginTop: '2rem',
                  backgroundColor: '#c29d59',
                  width: '60px',
                  textAlign: 'center',
                  padding: '4px',
                  color: '#fff'
                }}>logout</h1>
            </div>
        </div>
        <div className="left-box">
            
           
          </div>
      </div>
  )
}

export default Body
