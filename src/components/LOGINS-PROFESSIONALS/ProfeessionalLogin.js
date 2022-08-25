import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {  Snackbar, Stack } from '@mui/material';
import {StackContainer} from '../ADMIN/Styles-login';
import { useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import axiosInstance from '../../axiosInstance';
import CustomSnackBar from "../CustomSnackBar"

function ProfeesionalLogin(){
    const history = useNavigate()
    const [login, setLogin] = useState({
        email: '',
        password: '',
    })

    const [openSnakBar, setOpenSnackBar] = useState(false);
    const [snackBarConfig, setSnanckBarConfig] = useState({
        message: "",
        type: ""
    })

    // const handleClickShowPassword = () => {
    //     setLogin({
    //       showPassword: !login.showPassword,
    //     });
    //   };
    
    //   const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    //   };
    const [errors,setErrors]=useState({})

    const changeHandler = (event) => {
        setLogin({...login, [event.target.name]: event.target.value})
     }
     //validation function
     const validate = (fieldValues = login) => {
        let temp = { ...errors };
        if ("email" in fieldValues){
          temp.email =
            fieldValues.email === ""
              ? "Email is required"
              : /$^|.+@.+..+/.test(fieldValues.email)
              ? ""
              : "Invalid Email.";
        }
        if ("password" in fieldValues){
            temp.password =
              fieldValues.password === ""
                ? "Password is required"
                : ""
          }

              setErrors({
                ...temp,
              });
          
              return Object.values(temp).every((x) => x === "");      
    };
    const onsubmit =  async(e) => {
        if(validate()) {
           axiosInstance.post('/hospitallogin', {
            email : login.email,
            password : login.password
           })
           .then(((response) => {
            console.log("response.data.token : ", response.data.token);
            localStorage.setItem('token', response.data.token);
            setOpenSnackBar(true);
            setSnanckBarConfig({
                ...snackBarConfig,
                message : "Logged In",
                type: "success"
            })
            history('/hospital-login');
           }))
           .catch((error) => {
                setOpenSnackBar(true);
                console.log(error.response)
                setSnanckBarConfig({
                    ...snackBarConfig,
                    message : error.response.data.error[0].message,
                    type: "error"
                })
           })
       }
   }

return(
    <>
    
        <StackContainer>
        <Stack xs={12} sm={12} md={6} direction ="column" justifyContent="space-around" alignItems ="center" spacing={2}>

        <TextField
            required
            size='small'
            value={login.email}
            onChange={changeHandler}
            variant="outlined"
            name="email"
            label="email"
            {...(errors.email && {
                error: true,
                helperText: errors.email,
            })}
    />
    
    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
        <TextField
            required
            size='small'
            type='password'
            value={login.password}
            onChange={changeHandler}
            variant="outlined"
            name="password"
            label="password"
            {...(errors.password && {
                error: true,
                helperText: errors.password,
            })}
        />
    </FormControl>
    
    <Button onClick={onsubmit}>Submit</Button>
    </Stack>
    </StackContainer>
    {openSnakBar && <CustomSnackBar open={openSnakBar} setOpen={setOpenSnackBar} message={snackBarConfig.message} type={snackBarConfig.type}/>}
   
    </>
    );
}
export default ProfeesionalLogin;