import React,{useState,useEffect} from 'react';
import RoomDataService from '../HotelAdmin/http'
import HotelDataService from '../services/hotels'
const Display = () => {
 const [names,setNames] = useState([])
 const [name,setName] = useState()

 const retrieveRooms = ()=>{
    RoomDataService.get()
    .then((res)=>{
        console.log(res.data)
        setNames(res.data.names)
    return;
    }).catch(e=>{
        console.error("error:",e)
    })
 }
 const addRoom=(e)=> {
    e.preventDefault()
    const room = { name}
    RoomDataService.addRoom(room)
        .then((res) => {
            console.log(res.data)
        })
    alert("check")
}
 useEffect(()=>{
    retrieveRooms();

 },[])
 useEffect(()=>{
    retrieveHotels();
  },[])  


const retrieveHotels = ()=>{
  HotelDataService.getAll()
  .then(response=>{
    console.log(response.data)
    setNames(response.data.hotels)
  })
} 

  return <div>
      
      <h1>Results:</h1>
      <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button type='submiit' onSubmit={addRoom}>Submit</button>
      {names?.map(data=>(
        <>
        <h2>{data.name}</h2>

        </>
      ))}
  </div>;
};

export default Display;


