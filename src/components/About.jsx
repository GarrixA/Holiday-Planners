import React from 'react'
import '../components/styles/about.css'
import front from '../images/10003.jpg'
import back from '../images/10003.jpg'

function About() {

  

  return (
    <div className='about'>
      <div className='where'>
        <form>
          <input type="text" value="where to go"/>
          <input type='text'value="when?"/>
          <input type='text'value="Travel type"/>
          <button>FIND NOW</button>
        </form>
      </div>
      <div className="m-part">
        <div className="image">
          <div className="back">
            <img src={back} alt="img" />
          </div>
          <div className="front">
            <img src={front} alt="img" />
          </div>
        </div>
        <div className="texts">
          <div className="us">
            <div className='line'></div>
            <h3>About us</h3>
          </div>
          <div className="trip">
            <h1>Plan Your Trip with Us</h1>
          </div>
          <div className="para">
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline</p>
          </div>
          <div className='read'>
          <button>Read more</button>
          </div>
          
        </div>
      </div>
      <div >
        
      </div>
      <div>

      </div>
    </div>
    
  )
}

export default About
