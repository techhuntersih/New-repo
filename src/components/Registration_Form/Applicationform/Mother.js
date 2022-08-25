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
const Mother= ({applicationForm, setApplicationForm,steps,setSteps}) => {
    const [mother, setMother] = useState({
        name: '',
        mobile: '',
        religion: '',
        profesion: '',
        age: '',
        education: '',
        permanent_address: '',
        communication_address: '',
        residence_number: '',
        income: '',
        aadhaar_card_number: '',
    })
    const [errors,setErrors]=useState({})

    const changeHandler = e => {
        setMother({...mother, [e.target.name]: e.target.value})
     }
     //validation function
     const validate = (fieldValues = mother) => {
        let temp = { ...errors };
        if ("name" in fieldValues) {
          temp.name =
            fieldValues.name === "" ? " Name is required" : "";
        }
    
        if ("permanent_address" in fieldValues) {
          temp.permanent_address= 
          fieldValues.permanent_address === "" ? "Address is required" : "";
        }

        if ("communication_address" in fieldValues) {
            temp.communication_address =
             fieldValues.communication_address=== "" ? "Address is required" : "";
          }
    
          if ("residence_number" in fieldValues) {
                temp.residence_number=
                  fieldValues.residence_number === ""
                   ? "Residence Number is required" 
                   :  /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(fieldValues.residence_number)
                   ?""
                   :"Invalid Number";
              }
              if ("mobile" in fieldValues) {
                temp.mobile=
                  fieldValues.mobile === ""
                   ? "Mobile Number is required" 
                   :  /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(fieldValues.mobile)
                   ?""
                   :"Invalid Number";
              }
        if ("age" in fieldValues) {
          temp.age=
            fieldValues.age === "" ? "Age is required" : "";
        }
        if ("aadhaar_card_number" in fieldValues) {
            temp.aadhaar_card_number =
              fieldValues.aadhaar_card_number === "" ? "Aadhaar card number is required"
              :fieldValues.aadhaar_card_number.length===12
              ?"":"invalid Aadhar number"
            
          }
          if ("income" in fieldValues) {
            temp.income =
              fieldValues.income === "" ? "Income is required" : "";
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
                mother: mother

            })
            
             setSteps(steps+1);
        }
    }
 
    return (
      <div>
        <h3>mother Details</h3>
        <Grid container xs={12} sm={12} md={4} rowSpacing={2} justifyContent="center">  
            <Grid item xs={4}>
                <TextField
                        required
                        value={mother.name}
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
            <Grid item xs={4}>
            <TextField
                    required
                    value={mother.age}
                    onChange={changeHandler}
                    variant="outlined"
                    name="age"
                    label="Age"
                    {...(errors.age && {
                        error: true,
                        helperText: errors.age,
                    })}
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
                    
                    value={mother.religion}
                    onChange={changeHandler}
                    variant="outlined"
                    name="religion"
                    label="Religion"
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
                    value={mother.education}
                    onChange={changeHandler}
                    variant="outlined"
                    name="education"
                    type="Education"
                    label="Education"
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
                    required
                    value={mother.profesion}
                    onChange={changeHandler}
                    variant="outlined"
                    name="profesion"
                    label="Profession"
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
                    required
                    value={mother.permanent_address}
                    onChange={changeHandler}
                    variant="outlined"
                    name="permanent_address"
                    label="Permanent Address"
                    {...(errors.permanent_address && {
                        error: true,
                        helperText: errors.permanent_address,
                    })}
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
                    required
                    value={mother.communication_address}
                    onChange={changeHandler}
                    variant="outlined"
                    name="communication_address"
                    label="Communication_address"
                    {...(errors.communication_address && {
                        error: true,
                        helperText: errors.communication_address,
                    })}
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
                    value={mother.residence_number}
                    onChange={changeHandler}
                    variant="outlined"
                    name="residence_number"
                    label="Residence number"
                    {...(errors.residence_number && {
                        error: true,
                        helperText: errors.residence_number,
                    })}
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
                    required
                    value={mother.mobile}
                    onChange={changeHandler}
                    variant="outlined"
                    name="mobile"
                    label="Mobile"
                    {...(errors.residence_number && {
                        error: true,
                        helperText: errors.residence_number,
                    })}
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
                    required
                    value={mother.income}
                    onChange={changeHandler}
                    variant="outlined"
                    name="income"
                    label="Income"
                    {...(errors.income && {
                        error: true,
                        helperText: errors.income,
                    })}
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
                    required
                    value={mother.aadhaar_card_number}
                    onChange={changeHandler}
                    variant="outlined"
                    name="aadhaar_card_number"
                    label="Aadhaar card number"
                    {...(errors.aadhaar_card_number && {
                        error: true,
                        helperText: errors.aadhaar_card_number,
                    })}
            />
            </Grid>
            
            {/* <Grid item xs={4}>
            <FormControl style={{minWidth: 300}} >
                <InputLabel id="demo-simple-select-label">Degree of hearing loss</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Degree of hearing loss"
                    name="degree"
                    value={mother.degree}
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
            <Grid item xs={4}>
            <FormControl style={{minWidth: 300}}>
                <InputLabel id="demo-simple-select-label">Type of hearing loss</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Type of hearing loss"
                    name="type"
                    value={mother.type}
                    onChange={changeHandler}
                >
                    {inbuiltvalues.type.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            </Grid> */}
            <Button onClick={onsubmit}>Submit</Button>
        </Grid>
          
        </div>
    );
}


  
export default Mother;