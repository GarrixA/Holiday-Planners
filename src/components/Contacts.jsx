import React from 'react'
import './styles/contacts.css'
import {MdArrowForwardIos} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {MdAlternateEmail} from 'react-icons/md'
import {IoPinOutline} from 'react-icons/io5'
import address from '../reusable/Address'

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
              <p> <MdArrowForwardIos style={{color: '#c29d59', fontSize: '1.5rem'}}/> </p>
              <h4 style={{color: 'gray'}}>Best Price Guarantee</h4>
            </div>
            <div className="tittle">
            <p> <MdArrowForwardIos style={{color: '#c29d59', fontSize: '1.5rem'}}/> </p>
              <h4 style={{color: 'gray'}}>Customer care available 24/7</h4>
            </div>
            <div className="tittle">
            <p> <MdArrowForwardIos style={{color: '#c29d59', fontSize: '1.5rem'}}/> </p>
              <h4 style={{color: 'grey'}}>Free Travel Insureance</h4>
            </div>
            <div className="tittle">
            <p> <MdArrowForwardIos style={{color: '#c29d59', fontSize: '1.5rem'}}/> </p>
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
      <div className="add-map">
        <div className="address">
        {
            address.map(addr =>(
              <div key={addr.id}>
                  <div className="address-wrap">
                    <h2 className='wr' style={{color: 'black'}}><IoPinOutline className='titt'/> {addr.tittle}</h2>
                    <h4 className='wr'><MdLocationOn className='adr'/>{addr.address}</h4>
                    <h4 className='wr'><BsFillTelephoneFill className='phn'/>{addr.phone}</h4>
                    <p className='wr'><MdAlternateEmail className='mail'/>{addr.email}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.754738963382!2d30.045424035609884!3d-1.9789639680499311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5e63098d97f%3A0xdaa7651b956b2af4!2sMumena%2C%20Kigali!5e0!3m2!1sen!2srw!4v1697532718538!5m2!1sen!2srw" width="600" height="450" style={{border:'0', width: '100%', height:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
    </div>
  )
}

export default Contacts
