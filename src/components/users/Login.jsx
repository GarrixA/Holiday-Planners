import React from 'react';
import './login.css';
import image1 from '../../images/login.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='signin-container'>
        <div className="signin-background">
            <div className="signin-wrapper">
                <div className="signin-tittle">
                    <h1>Login</h1>
                    <p></p>
                </div>
                <div className="account">
                    <h5>You don't have an account?</h5>
                     <h5><Link to={'/SignUp'} style={{color: '#c29d59', textDecoration: 'none'}}>Sin Up</Link></h5>
                </div>
                <div className="signup-inputs">
                    <label>Email</label>
                    <input type="text" placeholder='email'/>
                    <label>Password</label>
                    <input type="password" placeholder='password'/>

                </div>
                
                <div className="signup-button">
                    <button><Link to={'/Body'}  style={{color: '#fff', textDecoration: 'none'}}>Login</Link></button>
                </div>
            </div>
            <div className="signup-image">
                <img src={image1} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Login
