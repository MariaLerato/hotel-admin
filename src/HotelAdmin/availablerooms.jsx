import React, { useState, useEffect } from 'react';
import './Styles.css'
import { Dropdown } from 'react-bootstrap';
import Info from './info';
import k from '../images/male.png'
import { Link } from 'react-router-dom';
import Modal from "@material-ui/core/Modal";
import HotelDataService from '../services/hotels'
import bed from '../images/room2.png'
import FileBase64 from 'react-file-base64'

const Rooms = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(null)
    const [rooms, setRooms] = useState([])
    const [room, setRoom] = useState()
    const [image,setImage] = useState()
    const [description, setDesc] = useState()
    const [disabled, setDisplay] = useState(true)
    const [hotelrooms,setGuestList] = useState([])
    const [id,setId] = useState()

    const retrieveGuest = (e)=>{
        HotelDataService.getAllRooms()
        .then((res)=>{
            console.log(res.data)
            setGuestList(res.data.hotels)
        })
    }
    useEffect(()=>{
        retrieveGuest()
    },[])
  
    const handleOpen = () => {
        setOpen(!open)
    }
    const close = ()=>{
        setOpen(false)
    }
   
    async  function addRoom(e){
        e.preventDefault()
        const u={room,description,id,image}
        console.log(u)
        HotelDataService.createHotel(u)
        .then(res=>console.log(res.data))
       }
    return (
        <>
            <div className='GuestContainer'>
                <div className='link'>
                    <h1>
                        Montello
                    </h1>

                    <div className='dropdown' style={{ height: 45, color: '#519c84', alignContent: 'center', textAlign: 'center', paddingTop: '4%' }}>
                        Hotel @ Hatfield
                    </div>
                    <h2 className='subheading'>Reservations</h2>
                    <div className='reserv'>
                    <Link to='/guestlist'> <p> Guests</p></Link>
                    <Link to='/status'>  <p> Check In</p></Link>
                    </div>
                    <h2>Management</h2>
                    <div className='reserv'>
                    <p> Settings </p>
                    <p style={{ color: '#64D3BF' }}> Rooms </p>
                    </div>
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
                            <i className='fa fa-search fa-2x' style={{ padding: '2.5%' }}></i>
                            <input type='text' name='search' placeholder='Search Rooms' className='search-input' />
                        </div>
                        <div className='alarm'>
                            <button type='submit' onClick={handleOpen}>Add New Room</button>
                        </div>
                    </div>
                    <div className='guestlist'>
                        <div className='icon-home'>
                            <i className='fa fa-bed' style={{ marginTop: 4, marginLeft: -3, color: '#5bad9b' }}></i>
                            <p>/Rooms</p>
                        </div>
                        <div className='hotel'>
                            <h2>Hotel Rooms</h2>
                            <p>Hotel @ Hatfield</p>
                        </div>
                        <div className='list'>
                            {
                               hotelrooms.map(data =>
                                    <li key={data.id}>
                                        <img src={bed} alt={data.room} style={{width:144,height:94,borderRadius:10}}/>           
                                        <button type='submit' style={{ height: 40, width: 144, marginLeft: '35%' }} onClick={() => disabled}>Available</button>
                                        <button type='submit' style={{ height: 40, width: 144 }} disabled={true}>Not Available</button>

                                    </li>    
                                )
                            }
                            {selected && (
                                <div >
                                    <li>
                                        <img alt='not found' width={"144px"} style={{ borderRadius: 10 }} src={URL.createObjectURL(selected)} />
                                        <button type='submit' style={{ height: 40, width: 144, marginLeft: '35%' }} >Available</button>
                                        <button type='submit' style={{ height: 40, width: 144 }}>Not Available</button>
           
                                    </li>
                                </div>
                            )}

                        </div>

                    </div>
                    <div className='Container'>
                        <Modal
                            open={open}
                            onClose={close}
                            style={{
                                position: 'absolute',

                                width: '40%',
                                height: 350,
                                padding:'2%',
                                margin: 'auto',
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div className='ModalContainer'>
                                <form className='Add' onSubmit={addRoom}>
                                    <h2 style={{ marginLeft: '20%' }}>Add Hotel Room</h2>
                                    <div className='hotel-input-icons'>
                                        <i className='fa fa-bed fa-2x'></i>
                                        <input type='text' placeholder='Type Of Room'
                                            className='input-field'
                                            value={room}
                                            onChange={(e)=>setRoom(e.target.value)}
                                        />
                                        {/* <FileBase64
                                        type="file"
                                        multiple={false}
                                        onDone={({base64})=>setImage({image:base64})}
                                        /> */}
                                    </div>
                                       

                                    <button type='button' className='addnew' style={{ width: 170, marginLeft: '55%', marginTop: '2%' }} onClick={addRoom} >Add New Room</button>
                                </form>
                          
                            </div>
                    
                </Modal>
            </div>
        </div>
        </div >
    </>
    )
}
export default Rooms
