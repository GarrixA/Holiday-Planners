import React, { useState } from 'react';
import './login.css';
import image1 from '../../images/login.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () =>{
    const navigate = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) =>{
        e.preventDefault();
        setIsLoading(true);
        axios({
            method: 'POST',
            url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
            data:{
                    email: email,
                    password: password,
            },
        })
        .then((Response) =>{
            localStorage.setItem('token', Response.data.access_token);
            toast.success('Login seccessfully');
            setTimeout(() =>{
                navigate("/Body")
            }, 3000);
        })
        .catch((error) =>{
            console.log(error);
            toast.error('login failed!!!')
        })
    }
  return (
    <div className='signin-container'>
        <ToastContainer className='toast'/>
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
                <div className="signup-inputs"
                    
                    >
                    <label>Email</label>
                    <input type="text" placeholder='email' 
                        onChange={(e) =>{
                            e.preventDefault();
                            setEmail(e.target.value);
                        }}
                    />
                    <label>Password</label>
                    <input type="password" placeholder='password' 
                        onChange={(e) =>{
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}
                    />
                    <div className='rem'>
                        <input type="checkbox"/>
                        <label style={{fontSize: '1rem'}}>Remember me</label>
                    </div>
                    
                </div>
                <div className="with">
                        {/* <div className='left'></div> */}
                        <h5>Or login with </h5>
                        {/* <div className='right'></div> */}
                    </div>
                
                <div className="signup-button">
                    <button><Link to={'/Body'}  style={{
                        color: '#fff', 
                        textDecoration: 'none'}} onClick={handleLogin}>Login</Link></button>
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