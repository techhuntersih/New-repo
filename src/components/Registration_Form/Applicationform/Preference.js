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
const Preference = ({applicationForm, setApplicationForm,steps,setSteps}) => {
    const [preference, setpreference] = useState({
        preference1:"",
        preference2:"",
        preference3:"",
        preference4:"",
        preference5:"",
    })
    const [errors,setErrors]=useState({})

    const changeHandler = e => {
        setpreference({...preference, [e.target.name]: e.target.value})
     }
     //validation function
     const validate = (fieldValues = preference) => {
        let temp = { ...errors };
        if ("preference1" in fieldValues) {
          temp.preference1 =
            fieldValues.preference1 === "" ? " Preference of hospital  is required" : "";
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
                preference: preference
            })
            
             setSteps(steps+1);
        }
    }
 
    return (
       <div>
            <FormControl style={{minWidth: 300}} >
                <InputLabel id="demo-simple-select-label">Degree of hearing loss</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Degree of hearing loss"
                    name="degree"
                    value={preference.degree}
                    onChange={changeHandler}
                >
                    {inbuiltvalues.degree.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button onClick={onsubmit}>Submit</Button>
        </div>
    );
}

export default Preference;
