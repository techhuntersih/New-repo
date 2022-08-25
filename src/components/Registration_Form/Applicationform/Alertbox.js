import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckApplicationStatus from "./CheckApplicstionDetails";
function AlertBox({registerNumber}){
    const [click,setClick] =useState(false)
    // const history = useNavigate()
    return(
       <div>
          <p>Your Application is successfully Submitted</p>
           <p>Your Registration Number is {registerNumber}</p>
           <button onClick={()=>{setClick(!click)}}>Check Application Status</button>
            {click?<CheckApplicationStatus registeNumber={registerNumber} />:""}
       </div>
    )
}
export default AlertBox;