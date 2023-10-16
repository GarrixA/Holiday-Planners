import React from 'react'
import image from '../images/10005.jpg'
import './styles/contacts.css'
import {MdArrowForwardIos} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'

function Contacts() {
  return (
    <div className='bg'>
      <div className="imag">
        <h1>Contact Us</h1>
      </div>
      <div className="details">
        <div className="form">
          <form>
            <input type="text" placeholder='Full name'/>
            <input type="text" placeholder='email'/>
            <input type="text" placeholder='phone'/>
            <input type="text" placeholder='service'/>
            <textarea name="Comment">comment</textarea>
            <input type="submit" className='submit' style={{width: '160px', border:'1px solid #c29d59', backgroundColor: '#c29d59', fontSize: '1.2rem', color: '#ffff'}}/>
          </form>
        </div>
        <div className="others">
          <div className="why">
            <div className="ask">
              <div className='ybook'></div>
              <h1 style={{color: 'black'}}>WHY BOOK WITH US?</h1>
            </div>
            <div className="tittle">
              <p> <MdArrowForwardIos/> </p>
              <h4 style={{color: 'gray'}}>Best Price Guarantee</h4>
            </div>
            <div className="tittle">
            <p> <MdArrowForwardIos/> </p>
              <h4 style={{color: 'gray'}}>Customer care available 24/7</h4>
            </div>
            <div className="tittle">
            <p> <MdArrowForwardIos/> </p>
              <h4 style={{color: 'grey'}}>Free Travel Insureance</h4>
            </div>
            <div className="tittle">
            <p> <MdArrowForwardIos/> </p>
              <h4 style={{color: 'grey'}}>Hand-picked Tours & Activities</h4>
            </div>

          </div>
          <div className="question">
            <div className="tittle">
              <div className='que'></div>
              <h1>GET A QUESTION?</h1>
            </div>
            <div className="div">
              <p>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
            </div>
            <div className="email">
              <div></div>
              <h1> <MdEmail style={{color: 'black', fontSize: '1.7rem'}}/> holidayplanners@gmail.com</h1>
            </div>
            <div className="phone"  >
            
              <h1> <BsFillTelephoneFill style={{color: 'black', fontSize: '1.7rem'}}/> +123 456 7890</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
