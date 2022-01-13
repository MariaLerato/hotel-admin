import React,{useState} from "react";
import l from '../images/maria.png'
import { Link } from "react-router-dom";
import Info from "../HotelAdmin/info";
import { Modal } from "@material-ui/core";

const AddNew = () =>{
    const [open,setOpen] = useState(false)
    
    const closeModal = ()=>{
        setOpen(false)
    }
    const openModal = ()=>{
        setOpen(true)
    }
   
   const ModalOpen = ()=>{
    return(
        <div>
            <h4>Modal Component</h4>   
            <button type='submit'
            onClick={openModal}
            >
                Open Modal
            </button>  
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
    return(
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
                        <h3>Log Out</h3>
                    </div>
                </div>
                <div className='guests'>
                    <div className='header'>
                       <div className='input-icons'>
                          <i className='fa fa-search fa-2x' style={{padding:'2.5%'}}></i>
                            <input type='text' name='search' placeholder='Search Hotels'  className='search-input'/>
                       </div>
                    </div>
                    <div className='guestlist'>
                       <div className='icon-home'>
                        <i className='fa fa-pencil' style={{marginTop:4,marginLeft:-3,color:'#5bad9b'}}></i>
                            <p>/Registered Hotels</p>
                       </div>
                       <div style={{margin:'4%'}} >
                          {
                             Info.guests.map(data=>
                                <li key={data.id} className='listHotels' >
                                  <p style={{paddingLeft:'4%',fontSize:20,fontWeight:'400'}}>  {data.name}</p>
                                   <div className='registerButton'>
                                       <button type='submit' style={{marginLeft:'-30%',width:144,height:44}} >Registered</button>
                                        <button type='submit' style={{marginLeft:'5%',width:144,height:44}}>De-register</button>
                                   </div>
                                </li>
                                )
                          }
                         <div>
                         <button type='submit' className='addnew' >Add New Hotel</button>
                         </div>
                        
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddNew

