import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../HotelAdmin/Styles.css";
import Info from "../HotelAdmin/info";
import { Link,useNavigate } from "react-router-dom";
import l from "../images/maria.png";
import Modal from "@material-ui/core/Modal";

const Hotels = () => {
  const registered =[ 
    {
    
        id:'0',name:'Hotel Sandton Sun'
    },
    {
        id:'1',name:'Sandton Star Hotel'
    },
    {
        id:'2',name:'Palms Hotel'
    },
    {
        id:'3',name:'Signature Luxury Hotel'
    },
    {
        id:'4',name:'RH Protea Hotel'
    
    }]
  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState(registered);
  const [name,setName] = useState();
  const [search,setSearch] = useState();

  const [ id,setId] = useState()

    const FilterSearch = ()=>{
     {add.filter(data=>data.name.includes(name)).map(data=> (
        <li>
          {data}
        </li>
      
     ))}
    }
  const handleChange = (e)=>{
    setName(e.target.value)
  }
  const handleAdd = ()=>{
    const newList = Info.registered.concat({name})
    setAdd(newList)
    setName('')
  }

  const close = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

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
                onChange={FilterSearch}
               
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
              { add.map((data) => (
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
                    <div className="Add">
                      <h2>Add Hotel</h2>
                      <div className="hotel-input-icons">
                        <i className="fa fa-building fa-2x"></i>
                        <input
                          type="text"
                          placeholder="Hotel Name"
                          className="input-field"
                          onChange={handleChange}
                          value={name}
                        />
                      </div>
                      <div className="hotel-input-icons">
                        <i className="fa fa-user fa-2x"></i>
                        <input
                          type="text"
                          placeholder="Hotel Admin"
                          className="input-field"
                        />
                        <div className="input-icons">
                          <i className="fa fa-address-card  fa-2x"></i>
                          <input
                            type="text"
                            placeholder="Hotel ID"
                            className="input-field"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="addnew"
                        style={{ width: 170, marginLeft: "65%" }}
                        onClick={handleAdd}
                      >
                        Add New Hotel
                      </button>
                    </div>
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
