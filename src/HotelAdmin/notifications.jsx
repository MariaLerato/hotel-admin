import React from 'react';
import Info from './info';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import k from '../images/male.png'

const Notifications = ()=>{
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
                <p> Bookings</p>
               <Link to='/guestlist'> <p> Guests</p></Link>
              <Link to='/status'>  <p> Check In</p></Link>
                <h2>Management</h2>
                <p> Settings </p>
                <p style={{color:'#64D3BF'}}> Rooms </p>
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
                        <input type='text' name='search' placeholder='Search Notifications'  className='search-input'/>
                   </div>
                   <div className='alarm'>
                    <button type='submit'>Add New Room</button>
                   </div>
                </div>
                <div className='guestlist'>
                   <div className='icon-home'>
                    <i className='fa fa-bell' style={{marginTop:4,marginLeft:-3,color:'#5bad9b'}}></i>
                        <p>/Notifications</p>
                   </div>
                   <div className='hotel'>
                       <h2>Notifications</h2>
                       <p>Hotel @ Hatfield</p>
                   </div>
                   <div className='list'>
                      {
                         Info.notifications.map(data=>
                           
                              <div className='notifications'  key={data.id}>
                              <img src={data.pic} alt='rooms' style={{width:68,height:70,borderRadius:40}}/>
                                <div className='text'>
                                <h5>{data.name}</h5>
                                <p>{data.time}</p>
                                </div>
                                </div>
                            
                            )
                      }
                    
                   </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Notifications