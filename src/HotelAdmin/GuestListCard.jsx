import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";
export const GuestListCard = ({ data, index }) => {
  const [show, setShow] = useState(false);

const handleClick=()=>{
    setShow(!show)
}

  return (
    <div className="cardContainer">
      <div key={data.id} className="cardRow">
        <div>
 
         
          {data.name}
          <p>{data.location}</p>
        
      
        </div>
        <>
          <button type="submit"  onClick={()=>handleClick() }>
            Booking
          </button>
        </>
      </div>

      {show && (
        <div className="dropThingie" >
            <div className="roomLine">
                <h5>Room</h5>
                <p>  {index +1}. {data.room}</p>
              
            </div>
            <div className="roomLine">
            <h5>Check in</h5>
           <p> {data.indate}
               </p> 
            </div>
            <div className="roomLine">
            <h5>Check Out</h5>
            <p>{data.outDate}</p>   
            </div>
            <div className="roomLine">
            <h5>Status</h5>
            <p className="status" style={{color: '#f26741'}}> {data.status}</p> 
            </div>
            <div className="roomLine">
            <h5>Total</h5>
            <p>  {data.total}</p> 
            </div>        
            </div>
      )}
    </div>
  );
};


