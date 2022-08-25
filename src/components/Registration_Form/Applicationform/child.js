import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

const inbuiltvalues = {
    degree : ["Mild","Moderate","Moderately Severe","severe","profound" ],
    type:["Conductive","Mixed","Sensorineural"]
  }
const Child = ({applicationForm, setApplicationForm,steps,setSteps}) => {
    const [child, setChild] = useState({
        name: '',
        email: '',
        contact_no: '',
        gender: '',
        date: '',
        age: '',
        state: '',
        degree: '',
        type: ''
    })
    const [errors,setErrors]=useState({})

    const changeHandler = e => {
        setChild({...child, [e.target.name]: e.target.value})
     }
     //validation function
     const validate = (fieldValues = child) => {
        let temp = { ...errors };
        if ("name" in fieldValues) {
          temp.name =
            fieldValues.name === "" ? " Name is required" : "";
        }
    
        if ("email" in fieldValues)
          temp.email =
            fieldValues.email === ""
              ? "Email is required"
              : /$^|.+@.+..+/.test(fieldValues.email)
              ? ""
              : "Invalid Email.";
    
        if ("gender" in fieldValues) {
          temp.gender =
            fieldValues.gender === "" ? "Gender is required" : "";
        }
    
        if ("address" in fieldValues) {
          temp.address = fieldValues.address === "" ? "Address is required" : "";
        }
    
        if ("age" in fieldValues) {
          temp.age=
            fieldValues.age === "" ? "Age is required" : "";
        }
    
        if ("state" in fieldValues) {
          temp.state =
            fieldValues.state === "" ? "State is required" : "";
        }
         if ("degree" in fieldValues) {
            temp.degree =
              fieldValues.degree === "" ? "Degree is required" : "";
          }
          if ("type" in fieldValues) {
            temp.type =
              fieldValues.type === "" ? "Type is required" : "";
          }
          if ("dob" in fieldValues) {
            temp.dob =
              fieldValues.dob === "" ? "DoB is required" : "";
          }
          if ("contact_no" in fieldValues) {
            temp.contact_no=
              fieldValues.contact_no === ""
               ? "Mobile Number is required" 
               :  /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(fieldValues.contact_no)
               ?""
               :"Invalid Number";
          }
        setErrors({
          ...temp,
        });
    
        return Object.values(temp).every((x) => x === "");
      };
 //submit function
    const onsubmit =  (e) => {
         if(validate()) {
            console.log(validate())
            setApplicationForm({
                ...applicationForm,
                child: child
            })
            
             setSteps(steps+1);
        }
    }
 
    return (
      <div>
        <Grid container xs={12} sm={12} md={6} justifyContent="center" style={{border : "2px solid red"}}>  
            <Grid item xs={6}>
                <TextField
                        required
                        value={child.name}
                        onChange={changeHandler}
                        variant="outlined"
                        name="name"
                        id="outlined-basic" 
                        label="name"
                        {...(errors.name && {
                            error: true,
                            helperText: errors.name,
                        })}
                />
            </Grid>
            <Grid item xs={6}>
            <TextField
                    required
                    value={child.email}
                    onChange={changeHandler}
                    variant="outlined"
                    name="email"
                    label="email"
                    {...(errors.email && {
                        error: true,
                        helperText: errors.email,
                    })}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
                    required
                    value={child.gender}
                    onChange={changeHandler}
                    variant="outlined"
                    name="gender"
                    label="gender"
                    {...(errors.gender && {
                        error: true,
                        helperText: errors.gender,
                    })}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
                    required
                    value={child.date}
                    onChange={changeHandler}
                    variant="outlined"
                    name="date"
                    type="date"
                    {...(errors.date && {
                        error: true,
                        helperText: errors.date,
                    })}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
                    required
                    value={child.age}
                    onChange={changeHandler}
                    variant="outlined"
                    name="age"
                    label="age"
                    type="number"
                    {...(errors.age && {
                        error: true,
                        helperText: errors.age,
                    })}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
                    required
                    value={child.state}
                    onChange={changeHandler}
                    variant="outlined"
                    name="state"
                    label="state"
                    {...(errors.state && {
                        error: true,
                        helperText: errors.state,
                    })}
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
                    value={child.contact_no}
                    onChange={changeHandler}
                    variant="outlined"
                    name="contact_no"
                    label="Contact Number"
                    {...(errors.contact_no && {
                        error: true,
                        helperText: errors.contact_no,
                    })}
            />
            </Grid>
            <Grid item xs={6}>
            <FormControl style={{minWidth: 300}} >
                <InputLabel id="demo-simple-select-label">Degree of hearing loss</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Degree of hearing loss"
                    name="degree"
                    value={child.degree}
                    onChange={changeHandler}
                >
                    {inbuiltvalues.degree.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl style={{minWidth: 300}}>
                <InputLabel id="demo-simple-select-label">Type of hearing loss</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Type of hearing loss"
                    name="type"
                    value={child.type}
                    onChange={changeHandler}
                >
                    {inbuiltvalues.type.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            </Grid>
            <Button onClick={onsubmit}>Submit</Button>
        </Grid>
          
        </div>
    );
}

export default Child;
