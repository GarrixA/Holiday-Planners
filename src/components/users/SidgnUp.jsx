import React from 'react';
import './signup.css';
import image1 from '../../images/login.png';

function SidgnUp() {
  return (
    <div className='signup-container'>
        <div className="signup-background">
            <div className="signup-wrapper">
                <div className="signup-tittle">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-inputs">
                    <label>First name</label>
                    <input type="text" placeholder='Firstname'/>
                    <label>Last name</label>
                    <input type="text" placeholder='Lastname'/>
                    <label>Email</label>
                    <input type="text" placeholder='email'/>
                    <label>Password</label>
                    <input type="text" placeholder='password'/>
                    <label>Confirm Password</label>
                    <input type="text" placeholder='confirm password'/>

                </div>
                <div className="signup-button">
                    <button>Sign Up</button>
                </div>
                <div className="account">
                    <h5>Do you have an account?</h5>
                    <h5>Sign in</h5>
                </div>
            </div>
            <div className="signup-image">
                <img src={image1} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default SidgnUp
