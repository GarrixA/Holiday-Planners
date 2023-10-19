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
      height: '330vh',
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
                  width: '40%',
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

            <div className="find">
              <div className="text">
                <div className="lin"></div>
                <h1>Find your tour</h1>
              </div>

              <div className="inputs">
                <input type="text"  placeholder='Search a tour'/>
                <input type="text" placeholder='where to?'/>
                <p className='side' style={{
                  display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'space-between',
                  padding: '8px',
                  color: 'black',
                  width: '240px',
                  border: '1px solid #0000003d',
                  height: '35px',
                  alignItems: 'center',
                  borderRadius: '4px'
                }}>Month <BiSolidDownArrow/></p>
                <h1 style={{color: '#000', width: '250px'}}>Duration</h1>
                <p className='side' style={{
                  display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'space-between',
                  color: 'black',
                  padding: '8px',
                  width: '240px',
                  border: '1px solid #0000003d',
                  height: '35px',
                  alignItems: 'center',
                  borderRadius: '4px'
                }}>Any <BiSolidDownArrow/></p>
              </div>
                
                <div className="mins">
                  <div className="min">
                    <h1>Min Price</h1>
                    <input type="number" placeholder='1'/>
                  </div>
                  <div className="max">
                    <h1>Max Price</h1>
                    <input type="number" placeholder='100'/>
                  </div>
                </div>
                <div className="box" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <input type="checkbox" style={{width: '40px', marginLeft: '1.5rem', height: '30px'}}/>
                  <label >Cultural</label>
                </div>
                <div className="box" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <input type="checkbox" style={{width: '40px', marginLeft: '1.5rem', height: '30px'}}/>
                  <label >Adventure</label>
                </div>
                <div className="box" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <input type="checkbox" style={{width: '40px', marginLeft: '1.5rem', height: '30px'}}/>
                  <label >Historical</label>
                </div>
                <div className="box" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <input type="checkbox" style={{width: '40px', marginLeft: '1.5rem', height: '30px'}}/>
                  <label >Seaside</label>
                </div>
                <div className="box" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <input type="checkbox" style={{width: '40px', marginLeft: '1.5rem', height: '30px'}}/>
                  <label >Discovery</label>
                </div>

                <button style={{
                  width: '150px',
                  height: '40px',
                  border: '1px solid #c29d59',
                  backgroundColor: '#c29d59',
                  borderRadius: '4px',
                  fontSize: '1.3rem',
                  color: '#fff',
                  margin: '22px'
                }}>Find Now</button>
            </div>
      </div>
    </div>
  )
}

export default TourList
