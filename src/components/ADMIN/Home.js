 import React, { useEffect, useState } from "react";   
import Child from "../Registration_Form/Applicationform/child";
import HOD from "./HOD";
import Login from "./Login";
import ZonalCoordinator from "./ZonalCoordinator";
import { useNavigate } from "react-router-dom";
 function Home(){
    const [userId,setUserid]=useState(localStorage.getItem('userType'));

    useEffect(()=>{
        console.log(userId)
    })
    return(
       <div>
        {userId==="1"?<h1>don</h1>:
        userId==="2" ? <HOD/> :
        userId==="3"?<ZonalCoordinator/>:"YOU areNOT AUTHORISED"}
       </div>

       
    )
 }
 export default Home