import React from 'react'
import image from '../images/10005.jpg'
import './styles/contacts.css'

function Contacts() {
  return (
    <div className='bg'>
      <div className="imag">
        <h1>Contact Us</h1>
      </div>
      <div className="details">
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text-area"/>
        </form>
      </div>
    </div>
  )
}

export default Contacts
