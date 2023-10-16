import React from "react";
import "./styles/modal.css";
import imageLogo from '../images/logo-s.png'
import {BsTwitter} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import { BsFacebook } from "react-icons/bs";



function Modal({ closeModal }) {
  return (
   <div className="modal-bg">
    <div className="modal-cont">
        <span className="right-btn" onClick={() => closeModal(false)}> X </span>
        
       <div className="logo">
        <img style={{height: '12rem', width: '25rem'}} src={imageLogo} alt="imag" />
       </div>
        <div className="wrapper">
            <div className="navs">
                <span>Home</span>
                <span>About</span>
                <span>Contact Us</span>
                <span>Tour List</span>
                <span>Sign Up</span>
                <span>Login</span>
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