import React,{useState} from 'react';
import './Styles.css'
import { Dropdown } from 'react-bootstrap';
import Info from './info';
import k from '../images/male.png'
import { Link } from 'react-router-dom';
import  Modal  from "@material-ui/core/Modal";

const Rooms = ()=>{
    const [open,setOpen] = useState(true)
    const close= ()=>{
        setOpen(false)
    }
    const handleOpen = ()=>{
        setOpen(true)
    }
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
                        <input type='text' name='search' placeholder='Search Rooms'  className='search-input'/>
                   </div>
                   <div className='alarm'>
                    <button type='submit' onClick={handleOpen}>Add New Room</button>
                   </div>
                </div>
                <div className='guestlist'>
                   <div className='icon-home'>
                    <i className='fa fa-bed' style={{marginTop:4,marginLeft:-3,color:'#5bad9b'}}></i>
                        <p>/Rooms</p>
                   </div>
                   <div className='hotel'>
                       <h2>Hotel Rooms</h2>
                       <p>Hotel @ Hatfield</p>
                   </div>
                   <div className='list'>
                      {
                         Info.rooms.map(data=>
                            <li key={data.id}>
                               <img src={data.pic} alt='rooms' style={{width:144,height:94,borderRadius:10}}/>
                                <button type='submit' style={{height:40}}>{data.button1}</button>
                                <button type='submit' style={{height:40}}>{data.but}</button>
                                {/* <button type='submit' className='book'>Book</button> */}
                            </li>
                            )
                      }
                    
                   </div>

                </div>
                <div className='Container'>
                <Modal
                     open={open}
                     onClose={close}
                     style={{
                        position:'absolute',
                        border: '2px solid #61B0A2',
                        width:'40%',
                        height:'60%',
                        margin: 'auto',
                        borderRadius:10,
                        alignItems:'center',
                        justifyContent:'center'
                      }}
                    >
                      <div className='ModalContainer'>
                        <div className='Add'>
                            <h2 style={{marginLeft:'2%'}}>Add Hotel Room</h2>
                            <div className='hotel-input-icons'>
                            <i className='fa fa-bed fa-2x'></i>
                            <input type='text' placeholder='Type Of Room'
                            className='input-field'
                            />
                            </div>
                            <div className='hotel-input-icons'>
                            <i className='fa fa-camera fa-2x'></i>
                            <input type='text' placeholder='Add Picture'
                            className='input-field'
                            />
                           
                        </div>
                        <button type='button' className='addnew' style={{width:170,marginLeft:'65%'}}>Add New Room</button> 
                        </div>
                      </div>
                    </Modal>
                </div>
            </div>
        </div>
    </>
    )
}
export default Rooms
