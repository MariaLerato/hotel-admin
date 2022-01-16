import React,{useState} from "react";
import  Dropdown  from 'react-bootstrap/Dropdown'
import '../HotelAdmin/Styles.css'
import Info from '../HotelAdmin/info'
import { Link } from 'react-router-dom'
import l from '../images/maria.png'
import  Modal  from "@material-ui/core/Modal";

const Hotels = () => {
    const [open,setOpen] = useState(true)
    const close= ()=>{
        setOpen(false)
    }
    const handleOpen = ()=>{
        setOpen(true)
    }

const Hotels = () => {
    const [open,setOpen] = useState(false)
    
    const closeModal = ()=>{
        setOpen(false)
    }
    const openModal = ()=>{
        setOpen(true)
    }
   const hello=()=>{
       <h1>Hello</h1>
   }
   const ModalOpen = ()=>{
    return(
        <div>
            <Modal 
            onClose={closeModal}
            open={open}
            style={{
                position: 'absolute',
                border: '2px solid #000',
                backgroundColor: 'gray',
                boxShadow: '2px solid black',
                height:80,
                width: 240,
                margin: 'auto'

            }}
            >
                </Modal>  
        </div>
    )
   }
    return (
        <>
            <div className='GuestContainer'>
                <div className='link'>
                    <h1>
                        Montello
                    </h1>
                    <div className='systemuser'>
                        <div className='profilepicture'>
                            <img src={l} alt={'admin'} ></img>
                        </div>
                        <div className='systemusername'>
                            <h3>Maria Lerato</h3>
                            <p>App Admin</p>
                        </div>   
                    </div>
                  
                    <h2 className='subheading'>Register Hotels</h2>
                    <h2>System Maintenance</h2>
                    <div className='logout'>
                        <i  className='fa fa-sign-out fa-2x' ></i>
                     <Link to='/signin'><h3>Log Out</h3></Link>
                    </div>
                </div>
                <div className='guests'>
                    <div className='header'>
                       <div className='input-icons'>
                          <i className='fa fa-search fa-2x' style={{padding:'2.5%'}}></i>
                            <input type='text' name='search' placeholder='Search Hotels'  className='search-input'/>
                       </div>
                    </div>
                    <div className='hotellist'>
                       <div className='icon-home'>
                        <i className='fa fa-pencil' style={{marginTop:4,marginLeft:-3,color:'#5bad9b'}}></i>
                            <p>/Registered Hotels</p>
                       </div>
                       <div style={{margin:'1%'}} >
                          {
                             Info.registered.map(data=>
                                <li key={data.id} className='listHotels' >
                                  <p style={{paddingLeft:'4%',fontSize:20,fontWeight:'400'}}>  {data.name}</p>
                                   <div className='registerButton'>
                                       <button type='submit' style={{marginLeft:'-30%',width:144,height:44}} >Register</button>
                                        <button type='submit' style={{marginLeft:'5%',width:144,height:44}}>De-register</button>
                                   </div>
                                </li>
                                )
                          }
                         <div>
                         <button type='button' className='addnew' onClick={handleOpen} >Add New Hotel</button>
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
                        // backgroundColor: '#E8FDF9',
                      }}
                    >
                      <div className='ModalContainer'>
                        <div className='Add'>
                            <h2>Add Hotel</h2>
                            <div className='hotel-input-icons'>
                            <i className='fa fa-building fa-2x'></i>
                            <input type='text' placeholder='Hotel Admin'
                            className='input-field'
                            />
                            </div>
                            <div className='hotel-input-icons'>
                            <i className='fa fa-user fa-2x'></i>
                            <input type='text' placeholder='Hotel Admin'
                            className='input-field'
                            />
                           <div className='input-icons'>
                           <i className='fa fa-account  fa-2x'></i>
                            <input type='text' placeholder='Hotel ID'
                            className='input-field'
                            />
                               </div>
                           
                        </div>
                        <button type='button' className='addnew' style={{width:170,marginLeft:'65%'}}>Add New Hotel</button> 
                        </div>
                      </div>
                    </Modal>
                         </div>
                        
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}}
export default Hotels