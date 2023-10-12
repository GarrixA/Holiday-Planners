import React from 'react'
import './reusable.css'
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { IoSearchCircleOutline } from 'react-icons/io5'

import image from '../images/logo-s.png'
// import Hamburger from 'hamburger-react';
import RenderModal from '../components/RenderModal';



function Navbar() {
  return (
    <div className="wrap">
      <div className='main-wrap'>
        <div className="black-nav">
          <div  className='contacts'>
              <h1>aphrogarrix10@gmail.com</h1>
              <hr />
              <h1>0789438437</h1>
          </div>
          <div className='socials'>
              <ul>
                <li><FaFacebookF background-color='#c29d59'/> </li>
                <hr />
                <li><GrInstagram/></li>
                <hr />
                <li><BsTwitter/></li>
              </ul>
          </div>

        </div>

        <div className="white-nav">
            <div className="nw-logo">
              <img src={image} alt="img" />
            </div>
            <div className="nw-others">
              <div className="btn">
                <button>Reserve</button>
              </div>
              <div className="search">
                <ul>
                  <li>< IoSearchCircleOutline/></li>
                </ul>
              </div>
              <div className="menu">
              <RenderModal/>
                
                
              </div>
            </div>
        </div>
      </div>

      {/* <NavForm/> */}
    </div>
  )
}

export default Navbar
