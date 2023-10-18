import React from 'react'
import tour from '../reusable/Tour'
import './styles/tourlist.css'
import {MdGroup} from 'react-icons/md'
import {BsFillClockFill} from 'react-icons/bs'
import {BiSolidDownArrow} from 'react-icons/bi'
import { Link } from 'react-router-dom'



function TourList() {
  return (
    <div className='main' style={{
      height: '535vh'
    }}>
      <div className="images">
          <h1>Tour List</h1>
      </div>
      <div className="choose">
        <p className='side' style={{
          borderLeft: '1px solid #0000003d',
          color: 'black',
          }}>Sort by:</p>
        <p className='middle' style={{
          borderRight: '1px solid #0000003d', 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          color: 'black'
          }}>Release date <BiSolidDownArrow/></p>
        <p className='side' style={{
          borderRight: '1px solid #0000003d', 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          color: 'black'
          }}>Descending <BiSolidDownArrow/></p>
      </div>
      <div className="tours">
        <div className='main-tour'>
          {
              tour.map(list =>(
                <div key={list.id} style={{
                  width: '40%'
                }}>
                    <div className="tours-card">
                      <div className='image'>
                        <img src={list.image} alt="img" />
                      </div>
                      <h4 className='italy'>{list.italy}</h4>
                      <h2 style={{color: '#000', padding: '3px', fontSize: '1.2rem', margin: '12px'}}>{list.holiday}</h2>
                      <p style={{color: '#000', padding: '3px', fontSize: "1rem", margin: '12px'}}>{list.description}</p>
                      
                      {list.duration.map(dura =>(
                        <div className='duration'>
                          <div className='wrapper'>
                            <div className="partone">
                              <h3 style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px'}}><BsFillClockFill size="1.5rem" color='#c29d59'/>{dura.tittle}</h3>
                              <p>{dura.description}</p>
                            </div>
                            <div className="partwo">
                              <h3 style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px'}}><MdGroup size="2rem" color='#c29d59'/>{dura.group}</h3>
                              <p>{dura.gDiscription}</p>
                            </div>
                          </div>

                            <div className='book'>
                                <h3>{dura.price}</h3>
                                <button><Link style={{
                                  textDecoration: 'none',
                                  color: '#fff'
                                }}
                                 to={'../OnePage'}>{dura.book}</Link></button>
                            </div>
                        </div>
                        
                      ))}
                    </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default TourList
