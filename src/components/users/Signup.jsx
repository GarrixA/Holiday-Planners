import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='signup' style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
      <form style={{
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '4.8rem',
        gap: '15px',
      }}>
        <input className='inp' type="text" placeholder='firstname'/>
        <input className='inp' type="text" placeholder='lastname'/>
        <input className='inp' type="text" placeholder='username'/>
        <input className='inp' type="text" placeholder='password'/>
        <input className='inp' type="text" placeholder='confirm password'/>
        <div style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            height:'35px'
        }}>
            <input type="submit" value="submit" style={{
                backgroundColor: '#c29d59',
                padding: '8px',
                width: '8rem',
                color: '#ffff',
                border: '1px #c29d59',
                borderRadius: '4px',
                fontSize: '1.3em'
            }}/>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '8px',
            justifyContent: 'flex-end',
        }}>
        <p>Do you have an account?</p>
        <button style={{
            width: '6rem',
            padding: '3px',
            border: '1px solid #7288b5',
            background: '#7288b5',
            color: '#fff'
        }}><Link style={{
            textDecoration: 'none',
            color: '#fff'
        }} to={'../Login'}> Login </Link> </button>
      </div>
      </form>
      
    </div>
  )
}

export default Signup
