import React from 'react'
import './reusable.css'

function Navbar() {
  return (
    <div>
      <div className='main-wrap'>
        <div  className='contacts'>
            <h1>aphrogarrix10@gmail.com</h1>
            <h1>0789438437</h1>
        </div>
        <div className='socials'>
            <span>Twitter</span>
            <span>Instagram</span>
            <span>Facebook</span>
        </div>

      </div>
    </div>
  )
}

export default Navbar
