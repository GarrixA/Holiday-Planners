import React from 'react';
import tours from './arrays/Tours';
import './styles/tours.css'

function TouDay() {
  return (
    <div className='tourday'>
      {
          tours.map(tour =>(
            <div key={tour.id} className='list'>
                <div className=' tours'>
                  <p >{tour.name}</p>
                  <p>{tour.country}</p>
                  <p>{tour.place}</p>
                  <p>{tour.phone}</p>
                  <button>{tour.edit}</button>
                  <button>{tour.delete}</button>
              </div>
            </div>
            
          ))
        }
    </div>
  )
}

export default TouDay
