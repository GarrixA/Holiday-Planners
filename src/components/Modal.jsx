import React from "react";
import "./styles/modal.css";
import imageLogo from '../images/logo-s.png'
import {BsTwitter} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import {HiOutlineX} from 'react-icons/hi';



function Modal({ closeModal }) {
  return (
   <div className="modal-bg">
    <div className="modal-cont">
        <span className="right-btn" onClick={() => closeModal(false)}> <HiOutlineX style={{fontSize: '2.3rem'}}/></span>
        
       <div className="logo">
        <img style={{height: '12rem', width: '25rem'}} src={imageLogo} alt="imag" />
       </div>
        <div className="wrapper">
            <div className="navs" >
                <span><Link to={'/'} onClick={() => closeModal(false)}>Home</Link></span>
                <span><Link to={'./About'} onClick={() => closeModal(false)}> About</Link></span>
                <span><Link to={'./Contacts'} onClick={() => closeModal(false)}>Contact Us</Link></span>
                <span><Link to={'./TourList'} onClick={() => closeModal(false)}> Tour List</Link></span>
                <span><Link to={'./Signup'} onClick={() => closeModal(false)}> Sign Up</Link></span>
                <span><Link to={'./Login'} onClick={() => closeModal(false)}>Login</Link></span>
            </div>
            <div className="social-s">
                <BsFacebook style={{fontSize: '2rem', backgroundColor: 'c29d59', color: '#ffff', padding: '8px', borderRadius: '50px'}}/>
                <GrInstagram style={{fontSize: '2rem', backgroundColor: 'c29d59', color: '#ffff', padding: '8px', borderRadius: '50px'}}/>
                <BsTwitter style={{fontSize: '2rem', backgroundColor: 'c29d59', color: '#ffff', padding: '8px', borderRadius: '50px'}}/>
            </div>
        </div>
    </div>
   </div>
  );
}

export default Modal;