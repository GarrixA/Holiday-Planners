import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import imagez from '../../images/login-s.jpg'
function Login() {
    return (
        <div className="main-login">
            <img src={imagez} alt="img" />
            <div className='login'>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <input className='crede' type="text" placeholder='Unsername' required/>
                    <input className='crede' type="text" placeholder='password' required/>
                    <input className='sub' type="submit" value="submit"/>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginBottom: '12px',
                    }}>
                    <Link style={{
                        textDecoration: 'none',
                        color: '#fff'
                    }} to={'../ResetP'}> <p>forgot password?</p> </Link>
                    </div>
                </form>
                <div className="account" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '6px',
                    alignItems: 'center',
                    width: '20rem',
                }}>
                    <p>If you don't have an account</p>
                    <button style={{
                        backgroundColor: '#c29d59',
                        border: '1px #c29d59',
                        padding: '6px',
                        borderRadius: '4px',
                        width: '6rem',
                    }}> <Link style={{
                        textDecoration: 'none',
                        color: '#fff'
                    }} to={'../Signup'}> Sign up </Link> </button>
                </div>
                
            </div>
        </div>
    )
}

export default Login
