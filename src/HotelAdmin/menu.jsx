import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Rooms from "./availablerooms";
import Guests from "./guestlist";
import Login from "./login";
import Splash from "./splash";
import Status from "./status";
const Menu = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path={'/login'} element={<Login/>}/>
                    <Route exact path={'/guestlist'} element={<Guests/>}/>
                    <Route exact path={'/availablerooms'} element={<Rooms/>}/>
                    <Route exact path={'/status'} element={<Status/>}/>
                    <Route exact path={'/'} element={<Splash/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Menu