import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hotels from "./registeredhotels";

import SystemLogin from "./signin";

import SystemSplash from "./systemSplash";



const SystemMenu = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path={'/signin'} element={<SystemLogin/>}/>
                    <Route exact path={'/registeredhotels'} element={<Hotels/>}/>
                    <Route exact path={'/'} element={<SystemSplash/>}/>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default SystemMenu