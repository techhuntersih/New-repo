import { Button } from "@mui/material";
import React from "react";
const CheckApplicationStatus= ({registerNumber}) =>{
    const url = 'http://localhost:5000/check-application-status'; 
    async function handleshow(){
       const response = await fetch(url,{
         method :'POST',
         cache: 'no-cache',
         headers: {
             'Content-Type':'checkApplicsation/json',
         },
         body :  JSON.stringify(registerNumber),
        })
        const parameter =await response.json();
        console.log(parameter)
     }

    return (
       <div>
        <input type="number" placeholder="Enter The Registration Number" />
        <Button onClick={()=>{handleshow()}}>Submit</Button>
       </div>
    )
}
export default CheckApplicationStatus