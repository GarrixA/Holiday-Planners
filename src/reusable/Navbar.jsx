import React from 'react'
import './reusable.css'
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import image from '../images/logo-s.png'
import { FiSearch } from 'react-icons/fi';





function Navbar() {

 

  return (
    <div className="wrap">
      <div className='main-wrap'>
        <div className="black-nav">
          <div  className='contacts'>
            <div className='flex-icon'>
              <HiOutlineMail color='#c29d59' className='icons1'/>
              <h1>aphrogarrix10@gmail.com</h1>
            </div>
              
              <hr />
              <div className='flex-icon'>
                <BsTelephoneFill color='#c29d59'className='icons1'/>
                <h1>0789438437</h1>
              </div>
              
          </div>
          <div className='socials'>
              <ul>
                <li><FaFacebookF color='#c29d59' className='icons'/> </li>
                <hr />
                <li><GrInstagram color='#c29d59' className='icons'/></li>
                <hr />
                <li><BsTwitter color='#c29d59' className='icons'/></li>
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
                <p className='sa'>
                  <FiSearch color='#c29d59'/>
                </p>
              </div>
              <div className="men">
                
                
              </div>
            </div>
        </div>
        
              
      </div>
      <div className='mn'>
      
      </div>

      {/* <NavForm/> */}
    </div>
  )
}

export default Navbar
