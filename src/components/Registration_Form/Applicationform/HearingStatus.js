import React, {useState} from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import Button from "@mui/material/Button";
import { BoxContainer, FormContainer, FieldError, SubmitButton } from "./styledcomponents";
import { createTheme, ThemeProvider } from "@mui/material";
import {TextField,InputLabel,Select,MenuItem} from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';


//radio button
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FieldContainer } from "./styledcomponents";

function HearingStatus({applicationForm, setApplicationForm,steps,setSteps}) {

 
const inbuiltvalues = {
    sta: ["REGULAR", "SPECIAL"]
}
  const [HearingStatus,setHearingStatus] = useState({
    hearingtest: '',
    hearingaids: '',
    If: '',
    name: '',
    sincewhen1: '',
    hours1: '',
    cochlear_implant: '',
    speech_language: '',
    speech_therapy: '',
    Nameofthecentre: '',
    Sincewhen2: '',
    Howmanytimesperweek: '',
    psychological_assessment: '',
    specialis: '',
    radiologically: '',
    Intervention: '',
    Nameoftheschool: '',
    Class: '',
    Sincewhen3: '',
    hours2: '',
    otherthanhearingloss: '',
    status: ''
    
})
const [errors,setErrors]=useState({})

const changeHandler = e => {
    setHearingStatus({...HearingStatus, [e.target.name]: e.target.value})
 }
 //validation function
 const validate = (fieldValues = HearingStatus) => {
    let temp = { ...errors };
    // if ("hearingtest" in fieldValues) {
    //   temp.hearingtest =
    //     fieldValues.hearingtest === "" ? " Hearing Test is required" : "";
    // }

    // if ("hearingaids" in fieldValues)
    //   temp.hearingaids =
    //     fieldValues.hearingaids === ""
    //       ? "Hearing Aids is required"
    //       : "";
          

    // if ("If" in fieldValues) {
    //   temp.If =
    //     fieldValues.If === "" ? "This field is required" : "";
    // }

    if ("name" in fieldValues) {
      temp.name = fieldValues.name === "" ? "Name is required" : /^[aA-zZ\s]+$/.test(fieldValues.name)?"" :"Only alphabets are allowed for this field ";
    }

    if ("sincewhen1" in fieldValues) {
      temp.sincewhen1=
        fieldValues.sincewhen1 === "" ? "This field is required" : "";
    }

    if ("hours1" in fieldValues) {
      temp.hours1 =
        fieldValues.hours1 === "" ? "This field is required" : "";
    }
    //  if ("cochlear_implant" in fieldValues) {
    //     temp.cochlear_implant =
    //       fieldValues.cochlear_implant === "" ? "This field is required" : "";
    //   }
    
    //   if ("speech_language" in fieldValues) {
    //     temp.speech_language =
    //       fieldValues.speech_language === "" ? "This field is required" : "";
    //   }
    //   if ("speech_therapy" in fieldValues) {
    //     temp.speech_therapy =
    //       fieldValues.speech_therapy === "" ? "This field is required" : "";
    //   }
      if ("Nameofthecentre" in fieldValues) {
        temp.Nameofthecentre=
          fieldValues.Nameofthecentre === ""
           ? "Name of the centre is required" 
           :  /^[A-Za-z -]+$/.test(fieldValues.Nameofthecentre)
           ?""
           :"Only alphabets are allowed for this field ";
      }
      if ("Sincewhen2" in fieldValues) {
        temp.Sincewhen2 =
          fieldValues.Sincewhen2 === "" ? "This field is required" : "";
      }
      if ("Howmanytimesperweek" in fieldValues) {
        temp.Howmanytimesperweek =
          fieldValues.Howmanytimesperweek === "" ? "This field is required" : "";
      }
    //   if ("psychological_assessment" in fieldValues) {
    //     temp.psychological_assessment =
    //       fieldValues.psychological_assessment === "" ? "This field is required" : "";
    //   }
    //   if ("specialis" in fieldValues) {
    //     temp.specialis =
    //       fieldValues.specialis === "" ? "This field is required" : "";
    //   }
    //   if ("radiologically" in fieldValues) {
    //     temp.radiologically =
    //       fieldValues.radiologically === "" ? "This field is required" : "";
    //   }
    //   if ("Intervention" in fieldValues) {
    //     temp.Intervention =
    //       fieldValues.Intervention === "" ? "This field is required" : "";
    //   }
      if ("Nameoftheschool" in fieldValues) {
        temp.Nameoftheschool=
          fieldValues.Nameoftheschool === ""
           ? "Name of the school is required" 
           :  /^[A-Za-z -]+$/.test(fieldValues.Nameoftheschool)
           ?""
           :"Invalid Name";
      }
      if ("Class" in fieldValues) {
        temp.Class =
          fieldValues.Class === "" ? "Class is required" : "";
      }
      if ("Sincewhen3" in fieldValues) {
        temp.Sincewhen3 =
          fieldValues.Sincewhen3 === "" ? "This field  is required" : "";
      }
      if ("status" in fieldValues) {
        temp.status =
          fieldValues.status === "" ? "This field is required" : "";
      }
      if ("hours2" in fieldValues) {
        temp.hours2 =
          fieldValues.hours2 === "" ? "This field is required" : "";
      }
      if ("otherthanhearingloss" in fieldValues) {
        temp.otherthanhearingloss =
          fieldValues.otherthanhearingloss === "" ? "This field is required" : "";
      }
    //   if ("txt1" in fieldValues) {
    //     temp.txt1 =
    //       fieldValues.txt1 === "" ? "txt1 is required" : "";
    //   }
    //   if ("txt2" in fieldValues) {
    //     temp.txt2 =
    //       fieldValues.txt2 === "" ? "txt2 is required" : "";
    //   }
    //   if ("txt3" in fieldValues) {
    //     temp.txt3 =
    //       fieldValues.txt3 === "" ? "txt3 is required" : "";
    //   }
     
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };
//submit function
const onsubmit =  (e) => {
    console.log("Hiiiii")
     if(validate()) {
        console.log(validate())
        setApplicationForm({
            ...applicationForm,
            HearingStatus: HearingStatus
        })
        
        setSteps(setSteps+1);
    }
}


const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#7289da',
            darker: '#053e85',
        },
        neutral: {
            main: '#d1a4e5',
            contrastText: '#fff',
        }
    },
});

return (
    <div>
<BoxContainer> <ThemeProvider theme={theme}>
         <FormContainer component="form" autoComplete="off"  action="../../post" method="post" 
          sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate>           <FieldContainer>
                <FormControl>
                        <FormLabel id="row-radio-buttons-group-label">Has your child's hearing testing been done?</FormLabel>
                            <RadioGroup row 
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="hearingtest" 
                                onChange={changeHandler}
                                required
                                >
                                <FormControlLabel control={<Radio />} label="Yes" type="radio" 
                                    value="yes" />

                                <FormControlLabel control={<Radio />} label="No" type="radio" name="hearingtest" onChange={changeHandler}
                                    value="no" 
                                    
                     />
                      </RadioGroup>
                      <FormHelperText/></FormControl>
          </FieldContainer>
          <FieldContainer>
                <FormControl>
                        <FormLabel id="row-radio-buttons-group-label">Is your child using hearing aids?</FormLabel>
                            <RadioGroup required row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                >



                                <FormControlLabel control={<Radio />} label="Yes" type="radio" name="hearingaids" onChange={changeHandler}
                                    value="yes" />

                                <FormControlLabel control={<Radio />} label="No" type="radio" name="hearingaids" onChange={changeHandler}
                                    value="no" 
                                   
                      />
                      </RadioGroup></FormControl>
          </FieldContainer>
          <FieldContainer>
                <FormControl>
                        <FormLabel id="row-radio-buttons-group-label">If yes, give following details Which ear?</FormLabel>
                            <RadioGroup required row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                >



                                <FormControlLabel control={<Radio />} label="Right" type="radio" name="If" onChange={changeHandler}
                                    value="right" />

                                <FormControlLabel control={<Radio />} label="Left" type="radio" name="If" onChange={changeHandler}
                                    value="left" />
                                 <FormControlLabel control={<Radio />} label="Both" type="radio" name="If" onChange={changeHandler}
                                    value="both" 
                    />
                      </RadioGroup></FormControl>
          </FieldContainer>
      
          <FieldContainer>
              <TextField
                      required
                      value={HearingStatus.name}
                      onChange={changeHandler}
                      variant="outlined"
                      name="name"
                      id="outlined-basic" 
                      label="Name of the hearing aid"
                      {...(errors.name && {
                          error: true,
                          helperText: errors.name,
                      })}
              />
          </FieldContainer>
          <FieldContainer>
     
          <FieldContainer>
          <TextField
                  required
                  value={HearingStatus.sincewhen1}
                  onChange={changeHandler}
                  variant="outlined"
                  name="sincewhen1"
                  label="since when"
                  type="number"
                  {...(errors.sincewhen1 && {
                      error: true,
                      helperText: errors.sincewhen1,
                  })}
          />
          </FieldContainer>
          <TextField
                  required
                  value={HearingStatus.hours1}
                  onChange={changeHandler}
                  variant="outlined"
                  label="For how many hours each day?"
                  name="hours1"
                  {...(errors.hours1 && {
                      error: true,
                      helperText: errors.hours1,
                  })}
          />
          </FieldContainer>

<FieldContainer>    <FormControl>
                        <FormLabel id="row-radio-buttons-group-label">Does your child have a cochlear implant?
                            <RadioGroup required row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                >



                                <FormControlLabel control={<Radio />} label="Yes" type="radio" name="cochlear_implant" onChange={changeHandler}
                                    value="yes" />

                                <FormControlLabel control={<Radio />} label="No" type="radio" name="cochlear_implant" onChange={changeHandler}
                                    value="no" 
                                   
                      />
                      </RadioGroup></FormLabel></FormControl>
          </FieldContainer>
<FieldContainer>
          <FormControl>
                        <FormLabel id="row-radio-buttons-group-label">Is your child's speech-language assessment done?</FormLabel>
                            <RadioGroup required row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                >



                                <FormControlLabel control={<Radio />} label="Yes" type="radio" name="speech_language" onChange={changeHandler}
                                    value="yes" />

                                <FormControlLabel control={<Radio />} label="No" type="radio" name="speech_language" onChange={changeHandler}
                                    value="no" 
                                   
                     />
                      </RadioGroup></FormControl>
          </FieldContainer>
<FieldContainer>
          <FormControl>
                        <FormLabel id="row-radio-buttons-group-label">Is your child attending speech therapy?</FormLabel>
                            <RadioGroup required row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                >
                                <FormControlLabel control={<Radio />} label="Yes" type="radio" name="speech_therapy" onChange={changeHandler}
                                    value="yes" />

                                <FormControlLabel control={<Radio />} label="No" type="radio" name="speech_therapy" onChange={changeHandler}
                                    value="no"
                                   
                     />
                      </RadioGroup></FormControl>
          </FieldContainer>

          <FieldContainer>
          <TextField
                  required
                  value={HearingStatus.Nameofthecentre}
                  onChange={changeHandler}
                  variant="outlined"
                  name="Nameofthecentre"
                  label="Name of the centre"
                  {...(errors.Nameofthecentre && {
                      error: true,
                      helperText: errors.Nameofthecentre,
                  })}
          />
          </FieldContainer>
         <FieldContainer>
          <TextField
                  value={HearingStatus.Sincewhen2}
                  onChange={changeHandler}
                  variant="outlined"
                  name="Sincewhen2"
                  label="Since when"
                  {...(errors.Sincewhen2 && {
                      error: true,
                      helperText: errors.Sincewhen2,
                  })}
          />
          </FieldContainer>
          <FieldContainer>
          <TextField
                  value={HearingStatus.Howmanytimesperweek}
                  onChange={changeHandler}
                  variant="outlined"
                  name="Howmanytimesperweek"
                  label="How many times per week"
                  {...(errors.Howmanytimesperweek && {
                      error: true,
                      helperText: errors.Howmanytimesperweek,
                  })}
          />
          </FieldContainer>
          <FieldContainer>
          <FormControl>
                        <FormLabel id="row-radio-buttons-group-label">Is your child's psychological assessment done?</FormLabel>
                            <RadioGroup required row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                >



                                <FormControlLabel control={<Radio />} label="Yes" type="radio" name="l" onChange={changeHandler}
                                    value="yes" />

                                <FormControlLabel control={<Radio />} label="No" type="radio" name="l" onChange={changeHandler}
                                    value="no" 
                                   
                     />
                      </RadioGroup></FormControl>
          </FieldContainer>
          <FieldContainer>
          <FormControl>
                        <FormLabel id="row-radio-buttons-group-label">Has your child been seen by any other medical specialist(e.g. ENT,
              Neurologist, Pediatrician, etc.)?</FormLabel>
                            <RadioGroup required row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                >



                                <FormControlLabel control={<Radio />} label="Yes" type="radio" name="specialis" onChange={changeHandler}
                                    value="yes" />

                                <FormControlLabel control={<Radio />} label="No" type="radio" name="specialis" onChange={changeHandler}
                                    value="no" 
                                   
                      />
                      </RadioGroup></FormControl>
          </FieldContainer>
          <FieldContainer>
          <FormControl>
                        <FormLabel id="row-radio-buttons-group-label">Has your child been investigated radiologically for cochlear
              implantation (CT/MRI)?</FormLabel>
                            <RadioGroup required row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                >



                                <FormControlLabel control={<Radio />} label="Yes" type="radio" name="radiologically" onChange={changeHandler}
                                    value="yes" />

                                <FormControlLabel control={<Radio />} label="No" type="radio" name="radiologically" onChange={changeHandler}
                                    value="no" 
                                   
                    />
                      </RadioGroup></FormControl>
          </FieldContainer>
          <FieldContainer>
          <FormControl>
                        <FormLabel id="row-radio-buttons-group-label">Is your child attending Early Intervention/Preschool/School?</FormLabel>
                            <RadioGroup required row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                >



                                <FormControlLabel control={<Radio />} label="Yes" type="radio" name="Intervention" onChange={changeHandler}
                                    value="yes" />

                                <FormControlLabel control={<Radio />} label="No" type="radio" name="Intervention" onChange={changeHandler}
                                    value="no" 
                                   
                     />
                      </RadioGroup></FormControl>
          </FieldContainer>

         

          <FieldContainer>
          <TextField
                  value={HearingStatus.Nameoftheschool}
                  onChange={changeHandler}
                  variant="outlined"
                  name="Nameoftheschool"
                  label="Name of the school"
                  {...(errors.Nameoftheschool && {
                      error: true,
                      helperText: errors.Nameoftheschool,
                  })}
          />
          </FieldContainer>
          <FieldContainer>
          <TextField
                  value={HearingStatus.Cl}
                  onChange={changeHandler}
                  variant="outlined"
                  name="Cl"
                  label="Class"
                  {...(errors.Cl && {
                      error: true,
                      helperText: errors.Cl,
                  })}
          />
          </FieldContainer>
          <FieldContainer>
          <TextField
                  value={HearingStatus.Sincewhen3}
                  onChange={changeHandler}
                  variant="outlined"
                  name="Sincewhen3"
                  label="since when"
                  {...(errors.Sincewhen3 && {
                      error: true,
                      helperText: errors.Sincewhen3,
                  })}
          />
          </FieldContainer>
          
          
          <FieldContainer>
          <FormControl style={{minWidth: 300}} >
              <InputLabel id="demo-simple-select-label">Type of School</InputLabel>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Type of School"
                  name="sta"
                  value={HearingStatus.sta}
                  onChange={changeHandler}
              >
                  {inbuiltvalues.sta.map((option) => (
                      <MenuItem key={option} value={option}>
                          {option}
                      </MenuItem>
                  ))}
              </Select>
          </FormControl>
          </FieldContainer>
          <FieldContainer>
          <TextField
                  value={HearingStatus.hours2}
                  onChange={changeHandler}
                  variant="outlined"
                  name="hours2"
                  label="How many hours per week?"
                  {...(errors.hours2 && {
                      error: true,
                      helperText: errors.hours2,
                  })}
          />
          </FieldContainer>
          <FieldContainer>
          <FormControl>
                        <FormLabel id="row-radio-buttons-group-label">Does your child have problem other than hearing loss (e.g. mental
              retardation, autism, cerebral palsy, visual impairment,
              hyperactivity, etc.)?</FormLabel>
                            <RadioGroup required row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                >



                                <FormControlLabel control={<Radio />} label="Yes" type="radio" name="otherthanhearingloss" onChange={changeHandler}
                                    value="yes" />

                                <FormControlLabel control={<Radio />} label="No" type="radio" name="otherthanhearingloss" onChange={changeHandler}
                                    value="no" 
                                   
                     />
                      </RadioGroup></FormControl>
          </FieldContainer>

          
          
          </FormContainer> 
          </ThemeProvider>
          <SubmitButton>
                  <Button padding="5%"   variant="contained" type="submit" value="Submit" onClick={onsubmit}>Submit</Button>
                  <Button padding="5%"  variant="contained" type="reset" value="Reset">Reset</Button></SubmitButton></BoxContainer>
        
      </div>
  );
}

export default HearingStatus;