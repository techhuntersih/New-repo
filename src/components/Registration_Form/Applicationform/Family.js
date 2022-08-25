import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

// const inbuiltvalues = {
//     degree : ["Mild","Moderate","Moderately Severe","severe","profound" ],
//     type:["Conductive","Mixed","Sensorineural"]
//   }
const Family = ({applicationForm, setApplicationForm,steps,setSteps}) => {
    const [Family, setFamily] = useState({
        familysetup :'',
        brother:'',
        sister:'',
        disability:'',
        implant:'',
        // txt1:'',
        // txt2:''

    })
    const [errors,setErrors]=useState({})

    const changeHandler = e => {
        setFamily({...Family, [e.target.name]: e.target.value})
     }
     //validation function
     const validate = (fieldValues = Family) => {
        let temp = { ...errors };
        if ("familysetup" in fieldValues) {
          temp.familysetup=
            fieldValues.familysetup === "" ? " familysetup is required" : "";
        }

        if ("Brother" in fieldValues) {
            temp.brother=
              fieldValues.brother === "" ? "This field is required" 
              : "";
         }
      
          if ("Sister" in fieldValues) {
            temp.sister =
              fieldValues.sister === "" ? "This field is required" 
              :  /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(fieldValues.sister)
              ?""
              :"Invalid Number";
         }
    
        if ("disability" in fieldValues) {
          temp.disability =
            fieldValues.disability === "" ? "This field is required" : "";
        }
    
        if ("implant" in fieldValues) {
          temp.implant = fieldValues.implant === "" ? "This field is required" : "";
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
                family: Family
            })
            
             setSteps(steps+1);
        }
    }
 
    return (
      <div>
        <Grid container xs={12} sm={12} md={6} justifyContent="center" style={{border : "2px solid red"}}>
                          
        <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Family Setup</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    onChange={changeHandler}
                    name="familysetup"
                    value={Family.familysetup}
                    required
                    >
                    <FormControlLabel 
                       control={<Radio />} 
                       label="Joint" 
                       type="radio" 
                       value="Joint" />
                    <FormControlLabel 
                           control={<Radio />} 
                            label="Nuclear" 
                            type="radio"
                            value='Nuclear' />
                </RadioGroup>
            </FormControl>    

                <Grid item xs={12}>
            <TextField
                    required
                    value={Family.brother}
                    onChange={changeHandler}
                    variant="outlined"
                     label="Number of brothers"
                     name ="brother"
                     type="number"
                    {...(errors.brother && {
                        error: true,
                        helperText: errors.brother,
                    })}
            />
            </Grid>  

            <Grid item xs={12}>
            <TextField
                    required
                    value={Family.sister}
                    onChange={changeHandler}
                    variant="outlined"
                    label="Number of Sisters"
                    name="sister"
                    type="number"
                    {...(errors.sister && {
                        error: true,
                        helperText: errors.sister,
                    })}
            />
            </Grid>


            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Any person with disability in the family? YES/NO If yes, give details :</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    onChange={changeHandler}
                    name="disability"
                    value={Family.disability}
                    required
                    >
                    <FormControlLabel 
                       control={<Radio />} 
                       label="Yes" 
                       type="radio" 
                       value="Yes" />
                    <FormControlLabel 
                           control={<Radio />} 
                            label="No" 
                            type="radio"
                            value='No' />
                </RadioGroup>
            </FormControl>      


            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Any person in the family with cochlear implant? YES/NO If yes, give details </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    onChange={changeHandler}
                    name="implant"
                    value={Family.implant}
                    required
                    >
                    <FormControlLabel 
                       control={<Radio />} 
                       label="Yes" 
                       type="radio" 
                       value="Yes" />
                    <FormControlLabel 
                           control={<Radio />} 
                            label="No" 
                            type="radio"
                            value='No' />
                </RadioGroup>
            </FormControl>   
              
           

        

   
            <Button onClick={onsubmit}>Submit</Button>
        </Grid>
          
        </div>
    );
}

export default Family;