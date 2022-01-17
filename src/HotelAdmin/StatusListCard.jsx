import React, { useState } from "react";
import "./Styles.css";
export const StatusListCard = ({ data }) => {
  const [checked, setChecked] = useState();
  const [out, setOut] = useState();
  const [status,setStatus ] = useState('Pending')

  const handleCheck = () => {
    setStatus('Checked In')
    alert(
        ` ${data.name} was successfully Checked In  Room Number 214 `
      );
  };
  const handleOut = () => {
    setStatus('Checked Out');
    alert(
      ` ${data.name} was successfully Checked Out, Collect Keys For Room Number 214 `
    );
  };
  

  return (
    <div key={data.id} className="statusList">
      <div>
       <h5> {data.name}</h5>
        <p>{data.location}</p>
        <p style={{marginTop:'-5%',display:'flex'}}>Status:<p style={{color:'#f26741'}}>{status}</p></p>
      </div>
      <div style={{ display: "flex", marginRight: "20%" }}>
        <button
          type="submit"
          className="check"
          style={{ height: 40, width: '80%' }}
          onClick={() => handleCheck()}
        >
          {data.status1}
        </button>
        <button
          type="submit"
          className="check"
          style={{ height: 40, width: 100 }}
          onClick={() => handleOut()}
        >
          {data.status2}
        </button>
      </div>
    </div>
  );
};