import React from 'react';
import Button from '@mui/material/Button';
import {TextField } from '@mui/material';
import Box from '@mui/material/Box';
// import './Request_form.css'
import { useState } from 'react';
function Request(){
  const [allValues, setAllValues] = useState({
    name: '',
    state: '',
    district: '',
    email: '',
    contact: '',
    case:'',
    implantee:''
 });
 const changeHandler = e => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
 }
 const url = 'http://localhost:5000/request';
 const header = { 'Content-Type': 'application/json' };
 const handleSubmit  = async(e) => {
   e.preventDefault();
   const data = {name: allValues.name,state:allValues.state,district:allValues.district,email:allValues.email,contact:allValues.contact,case:allValues.case,implantee:allValues.implantee};   
   await fetch(url,{
     method: 'POST', // *GET, POST, PUT, DELETE, etc.    
     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached     
     headers: header,
     body: JSON.stringify(data) // body data type must match "Content-Type" header
     }).then((response)=>{
       console.log('finish api call - response:::',response);
     }).catch((error)=>{
         console.log('something wrong:::',error);
     });   
     console.log(data);
 };

    return(
        <div className='main-container'>
            <div className='heading'>
                <h1 id='head'>Request for Service of Audiologist/Speech Therapist</h1>
            </div>
            <div className='sub-container'>
                <form id='create-course-form' onSubmit={handleSubmit}>
                  
                     <Box className='container1'>
                    <TextField
                        color="secondary"
                        id="standard-required"
                        label="Name"
                        defaultValue=""
                        variant="standard"
                        className='field'
                        // InputLabelProps={{ style: { fontSize: 7 } }}
                        // InputProps={{ style: { fontSize: 7 } }}
                        name='name'
                        onChange={changeHandler}
                      />
                        <TextField
                        id="standard-required"
                        label="State"
                        defaultValue=""
                        variant="standard"
                        className='field'
                        InputLabelProps={{ style: { fontSize: 7 } }}
                        InputProps={{ style: { fontSize: 7 } }}
                        name='state'
                        onChange={changeHandler}
                      />
                        <TextField
                        id="standard-required"
                        label="District"
                        defaultValue=""
                        variant="standard"
                        className='field'
                        InputLabelProps={{ style: { fontSize: 7} }}
                        InputProps={{ style: { fontSize: 7 } }}
                        name='district'
                        onChange={changeHandler}
                      />
                    </Box>
                    <Box className='container1'>
                    <TextField
                        id="standard-required"
                        label="Email"
                        defaultValue=""
                        variant="standard"
                        className='field2'
                        InputLabelProps={{ style: { fontSize: 7 } }}
                        InputProps={{ style: { fontSize: 7 } }}
                        name='email'
                        onChange={changeHandler}
                      />
                        <TextField
                        id="standard-required"
                        label="Contact No"
                        defaultValue=""
                        variant="standard"
                        className='field2'
                        InputLabelProps={{ style: { fontSize: 7 } }}
                        InputProps={{ style: { fontSize: 7 } }}
                        name='contact'
                        onChange={changeHandler}
                      />
                    </Box>
                    <Box className='container1'>
                    <TextField
                        id="standard-required"
                        label="Case Number"
                        defaultValue=""
                        variant="standard"
                        className='field2'
                        InputLabelProps={{ style: { fontSize: 7 } }}
                        InputProps={{ style: { fontSize: 7 } }}
                        name='case'
                        onChange={changeHandler}
                      />
                        <TextField
                        id="standard-required"
                        label="Name of implantee"
                        defaultValue=""
                        variant="standard"
                        className='field2'
                        InputLabelProps={{ style: { fontSize: 7 } }}
                        InputProps={{ style: { fontSize: 7 } }}
                        name='implantee'
                        onChange={changeHandler}
                      />
                    </Box>
                    <Box className='container1'>
                    <TextField
                        id="standard-required"
                        label="Service Required "
                        defaultValue=""
                        variant="standard"
                        className='field2'
                        InputLabelProps={{ style: { fontSize: 7 } }}
                        InputProps={{ style: { fontSize: 7 } }}
                        name='name'
                        onChange={changeHandler}
                      />
                        <TextField
                        id="standard-required"
                        label="Service required"
                        defaultValue=""
                        variant="standard"
                        className='field2'
                        InputLabelProps={{ style: { fontSize: 7 } }}
                        InputProps={{ style: { fontSize: 7 } }}
                        name='name'
                        onChange={changeHandler}
                      />
                    </Box>
                    <Box className='container1'>
                    <TextField
                        id="standard-required"
                        label="Specify the purpose"
                        defaultValue=""
                        variant="standard"
                        className='Specify-field'
                        InputLabelProps={{ style: { fontSize: 7 } }}
                        InputProps={{ style: { fontSize: 7 } }}
                        name='name'
                        onChange={changeHandler}
                      />
                    </Box>
                    <div className='button'>
                     <Button variant="contained" type="reset" id="btn" onClick={()=>{document.getElementById("create-course-form").reset();}}>Reset</Button>
                     <Button variant="contained" type='submit' id="btn">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Request