import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {  Stack } from '@mui/material';
import {StackContainer} from '../ADMIN/Styles-login';
import { useNavigate } from "react-router-dom";
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import FormControl from '@mui/material/FormControl';



function ActivationMapping(){

    
   

    
    const history = useNavigate()
    const [login, setLogin] = useState({
        username: '',
        password: '',
      
    })

    const [errors,setErrors]=useState({})

    const changeHandler = e => {
        setLogin({...login, [e.target.name]: e.target.value})
     }
     //validation function
     const validate = (fieldValues = login) => {
        let temp = { ...errors };
        if ("username" in fieldValues){
          temp.username =
            fieldValues.username === ""
              ? "username is required" 
              :""
        }
        if ("password" in fieldValues){
            temp.password =
              fieldValues.password === ""
                ? "Password is required"
                : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/.test(fieldValues.password)
                ? ""
                : "Enter a Strong Password";
          }

              setErrors({
                ...temp,
              });
          
              return Object.values(temp).every((x) => x === "");      
    };
    const onsubmit =  (e) => {
        if(validate()) {
            e.preventDefault();
           console.log(validate())
           setLogin({
            //    name: name,
               login: login
           })
           console.log(login)
           history('/por');
            
       }
   }

return(

    
    <div className="container form">
        <StackContainer>
            <h1>Activation and Mapping Login</h1>
        <Stack xs={12} sm={12} md={6} direction ="column" justifyContent="space-around" alignItems ="center" spacing={2}>
    <TextField
            required
            size='small'
            value={login.username}
            onChange={changeHandler}
            variant="outlined"
            name="username"
            label="username"
            {...(errors.username && {
                error: true,
                helperText: errors.username,
            })}
    />

<TextField
            required
            size='small'
            value={login.password}
            onChange={changeHandler}
            type="password"
            variant="outlined"
            name="password"
            label="password"
            {...(errors.password && {
                error: true,
                helperText: errors.password,
            })}
    />

   
    
        <Button onClick={onsubmit}>Submit</Button>
        </Stack></StackContainer>
   
    </div>
    );
}
export default ActivationMapping;