import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Styles.css'
import k from '../images/male.png'
import Info from './info';
import {Link } from 'react-router-dom'

const Status = ()=>{
    return(
        <>
        <div className='GuestContainer'>
            <div className='link'>
                <h1>
                    Montello
                </h1>

                <div className='dropdown' style={{height:45}}>
                    <Dropdown>
                        <Dropdown.Toggle variant>
                            Hotels
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href='#'>
                                Hotel Sandton Sun
                            </Dropdown.Item>
                            <Dropdown.Item href='#'>
                                Sandton Star Hotel
                            </Dropdown.Item>
                            <Dropdown.Item href='#'>
                                Palms Hotel
                            </Dropdown.Item>
                            <Dropdown.Item href='#'>
                                Luxury Hotel
                            </Dropdown.Item>
                            <Dropdown.Item href='#'>
                                Hotel @ Hatfield
                            </Dropdown.Item>
                            <Dropdown.Item href='#'>
                                Sheranton Pretoria Hotel
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <h2 className='subheading'>Reservations</h2>
           <p className='activity'> Bookings</p>
           <Link to='/guestlist'><p> Guests</p></Link>
                <p className='activity2'> Check In</p>
                <h2>Management</h2>
                <p> Settings </p>
               <Link to='/availablerooms'> <p> Rooms </p></Link>
                <div className='user'>
                    <div className='profilepicture'>
                        <img src={k} alt={'admin'} ></img>
                    </div>

                    <div className='username'>
                        <h3>Richie Milliem</h3>
                    </div>
                </div>
            </div>
            <div className='guests'>
                <div className='header'>
                   <div className='input-icons'>
                      <i className='fa fa-search fa-2x' style={{padding:'2.5%'}}></i>
                        <input type='text' name='search' placeholder='Search Guest'  className='search-input'/>
                   </div>
                   <div className='alarm'>
                    <i className='fa fa-bell fa-2x'></i>
                   </div>
                </div>
                <div className='guestlist'>
                   <div className='icon-home'>
                    <i className='fa fa-check' style={{marginTop:4,marginLeft:-3,color:'#5bad9b'}}></i>
                        <p>/Check</p>
                   </div>
                   <div className='hotel'>
                       <h2>Guests Status</h2>
                       <p>Hotel @ Hatfield</p>
                       <p style={{marginLeft:'-35%',marginRight:'4%'}}>Status</p>
                   </div>
                   <div className='listItems'>
                      {
                         Info.guests.map(data=>
                            <li key={data.id} style={{marginBottom:'-2%'}}>
                                {data.name}
                                <p>{data.location}</p>
                                <button type='submit' className='check'  style={{marginTop:'-4%',marginLeft:'70%',backgroundColor:'#61B0A2',height:40}}>{data.status1}</button>
                                <button type='submit' className='check' style={{marginTop:'-4%',marginLeft:'2%',height:40}}>{data.status2}</button>
                            </li>
                            )
                      }
                    
                   </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Status