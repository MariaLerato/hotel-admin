import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../HotelAdmin/Styles.css";
import Info from "../HotelAdmin/info";
import { Link,useNavigate } from "react-router-dom";
import l from "../images/maria.png";
import Modal from "@material-ui/core/Modal";
import HotelDataService from "../services/hotels"

const Hotels = () => {

  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState(false);
  const [name,setName] = useState();
  const [search,setSearch] = useState();
  const [hotel,setHotels] = useState([])
  const [description,setDescription] = useState()
  const [date,setDate] = useState(Date)
  const [ id,setId] = useState()

  useEffect(()=>{
    retrieveHotels();
  },[])  


  const close = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

const retrieveHotels = ()=>{
  HotelDataService.getAll()
  .then(response=>{
    console.log(response.data)
    setHotels(response.data.hotels)
  })
} 
 async  function registerHotel(e){
  e.preventDefault()
  const u={name,description,id}
  console.log(u)
  HotelDataService.createHotel(u)
  .then(res=>console.log(res.data))
 }

const refreshList = ()=>{
  retrieveHotels()
}


  const navigate = useNavigate()
  return (
    <>
      <div className="GuestContainer">
        <div className="link">
          <h1>Montello</h1>
          <div className="systemuser">
            <div className="profilepicture">
              <img src={l} alt={"admin"}></img>
            </div>
            <div className="systemusername">
              <h3>Maria Lerato</h3>
              <p>App Admin</p>
            </div>
          </div>

          <h2 className="subheading">Register Hotels</h2>
          <h2 style={{color:'white',marginTop:'-8%'}}>System Maintenance</h2>
          <div className="logout" style={{marginTop:'35%'}}>
            <i className="fa fa-sign-out fa-2x"></i>
            <Link to="/signin">
              <h3>Log Out</h3>
            </Link>
          </div>
        </div>
        <div className="guests">
          <div className="header">
            <div className="input-icons">
              <i className="fa fa-search fa-2x" style={{ padding: "2.5%" }}></i>
              <input
                type="text"
                name="search"
                placeholder="Search Hotels"
                className="search-input"
                // onChange={FilterSearch}
               
              />
            </div>
          </div>
          <div className="hotellist">
            <div className="icon-home">
              <i
                className="fa fa-pencil"
                style={{ marginTop: 4, marginLeft: -3, color: "#5bad9b" }}
              ></i>
              <p>/Registered Hotels</p>
            </div>
            <div style={{ margin: "1%" }}>
              
              
               {hotel.map((data) => (
              <ul>
                  <li key={data.id} className="listHotels">
                  <p
                    style={{
                      paddingLeft: "4%",
                      fontSize: 20,
                      fontWeight: "600",
                      color: "#3a8a70",
                    }}
                  >
                    {" "}
                    {data.name}
                  </p>
                  <div className="registerButton">
                    <button
                      type="submit"
                      style={{ marginLeft: "-30%", width: 144, height: 44 }}
                   
                    >
                      Register
                    </button>
                    <button
                      type="submit"
                      style={{ marginLeft: "5%", width: 144, height: 44 }}
                   
                    >
                      De-register
                    </button>
                  </div>
                </li>
              </ul>
              ))}
            
              <div>
                <button type="button" className="addnew" onClick={handleOpen}>
                  Add New Hotel
                </button>
                <Modal
                  open={open}
                  onClose={close}
                  style={{
                    position: "absolute",
                    width: "40%",
                    height: 450,
                    margin: "auto",
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  
                  }}
                >
                  <div className="ModalContainer">
                    <form className="Add" onSubmit={registerHotel}>
                      <h2>Add Hotel</h2>
                      <div className="hotel-input-icons">
                        <i className="fa fa-building fa-2x"></i>
                        <input
                          type="text"
                          placeholder="Hotel Name"
                          className="input-field"
                          onChange={(e)=>setName(e.target.value)}
                          value={name}
                        />
                      </div>
                      <div className="hotel-input-icons">
                        <i className="fa fa-user fa-2x"></i>
                        <input
                          type="text"
                          placeholder="Hotel Admin"
                          className="input-field"
                          onChange={(e)=>setDescription(e.target.value)}
                          value={description}
                        />
                        <div className="input-icons">
                          <i className="fa fa-address-card  fa-2x"></i>
                          <input
                            type="text"
                            placeholder="Hotel ID"
                            className="input-field"
                            onChange={(e)=>setId(e.target.value)}
                            value={id}
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="addnew"
                        style={{ width: 170, marginLeft: "65%" }}
                       onClick={registerHotel}
                      >
                        Add New Hotel
                      </button>
                    </form>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hotels
