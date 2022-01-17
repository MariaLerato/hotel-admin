import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Styles.css'
import k from '../images/male.png'
import Info from './info';
import {Link } from 'react-router-dom'
import { StatusListCard } from './StatusListCard';

const Status = ()=>{
    return(
        <>
        <div className='GuestContainer'>
            <div className='link'>
                <h1>
                    Montello
                </h1>

            
                <div className='dropdown' style={{height:45,color:'#519c84',alignContent:'center',textAlign:'center',paddingTop:'4%'}}>
                    Hotel @ Hatfield
                </div>
                <h2 className='subheading'>Reservations</h2>
         
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
                      <i className='fa fa-search fa-2x' style={{padding:'1.8%'}}></i>
                        <input type='text' name='search' placeholder='Search Guest'  className='search-input'/>
                   </div>
                   <div className='alarmNotfication'>
                        <Link to='/notifications'>     <i className='fa fa-bell ' style={{color:'#256b5e'}}></i></Link>
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
                       <p style={{marginLeft:'-40%',marginRight:'25%'}}>Status</p>
                   </div>
                   <div className='listItems'>
                      {
                         Info.guests.map(data=>
                            <StatusListCard data={data} />
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