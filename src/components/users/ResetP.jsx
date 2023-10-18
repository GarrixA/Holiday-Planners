import React from 'react'
import './reset.css'
import { Link } from 'react-router-dom'
function ResetP() {
  return (
    <div className='reset'>
      <form style={{
        width: '50%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '4.8rem',
        borderRadius: '8px'
      }}>
        <input className='res' type="text" placeholder='new password'/>
        <input className='res' type="text" placeholder='confirm password'/>
        <Link style={{
            textDecoration: 'none',
            color: '#fff',
        }} to={'../Login'}> <input type='submit' value="reset" style={{
            width: '7rem',
            height: '1.8rem',
            borderRadius: '4px',
            backgroundColor: '#c29d59',
            border: '1px solid #c29d59',
            fontSize: '1.3em',
            color: '#fff',
        }}/></Link>
      </form>
    </div>
  )
}

export default ResetP
