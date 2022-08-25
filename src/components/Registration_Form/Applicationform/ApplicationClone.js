import React from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AlertBox from './Alertbox';
import Child from './child';
import Father from './Father'
import Mother from "./Mother"
import Family from './Family';
import HearingStatus from './HearingStatus';
// import Ph from './preference';
// import FileUpload from './fileupload';
import { Button } from "@mui/material";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ChildCareSharpIcon from '@mui/icons-material/ChildCareSharp';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HearingRoundedIcon from '@mui/icons-material/HearingRounded';
import VaccinesSharpIcon from '@mui/icons-material/VaccinesSharp';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import clsx from 'clsx';
import { makeStyles, withStyles } from "@mui/styles";
import StepConnector from "@mui/material/StepConnector";
import { PropTypes } from "prop-types";
import Box from '@mui/material/Box';
import { AppContainer, SubmitButton } from "./styledcomponents";
function Form(){
    // const [allValues, setAllValues] = useState({
    //     name: '',	
    //     email:'',
    //     gender:	'',
    //     dob:'',
    //     age:''	,
    //     state:'',
    //     degree_of_Hearing_Loss:	'',
    //     type_of_hearing_loss:'',	
    //     address:''
    //  });
    const handleSteps = (steps) => {
      switch (steps) {
        case 0:
          return <Child applicationForm={applicationForm} setApplicationForm={setApplicationForm} steps={steps} setSteps={setSteps}/>
        case 1:
          return  <Father applicationForm={applicationForm} setApplicationForm={setApplicationForm} steps={steps} setSteps={setSteps}/> 
        case 2:
          return <Mother applicationForm={applicationForm} setApplicationForm={setApplicationForm} steps={steps} setSteps={setSteps}/>
        case 3:
          return <Family applicationForm={applicationForm} setApplicationForm={setApplicationForm} steps={steps} setSteps={setSteps}/>
        case 4:
          <HearingStatus applicationForm={applicationForm} setApplicationForm={setApplicationForm} steps={steps} setSteps={setSteps}/>
        default:
            throw new Error('Unknown step')
      }
    }
     const [applicationForm, setApplicationForm] = useState({
        child : {
            name : "",
            email : ""
        },
        father : {
            name : "",
            email : ""
        },
        mother : {
            name : "",
            email : ""
        },
        family : {
            name : "",
            email : ""
        },
        displayChild : {
            name : "",
            email : ""
        },
        preference : {
            name : "",
            email : ""
        }

        // family : {
        //     name : "",
        //     email : ""
        // },
        // family : {
        //     name : "",
        //     email : ""
        // },

     });
     const [registerNumber, setRegisterNumber] = useState()
     const [steps ,setSteps]=useState(0);
    //  const history = useNavigate();
    //  const changeHandler = e => {
    //     setAllValues({...allValues, [e.target.name]: e.target.value})
    //  }


    const ColorlibConnector = withStyles({
        alternativeLabel: {
        //   top: 22,
        },
        active: {
          '& $line': {
            background: "linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);",
          },
        },
        completed: {
          '& $line': {
            background: "linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);",
          },
        },
        line: {
            margin:"5px",
            paddingRight: "5px",
            borderRadius:"5px",
            // borderRight: "10px",
            height:"5px",
            width:"50px",
            background:"white",
            alignItems:"center",
            justifyContent:"center",
              
            
          
        },
      })(StepConnector);


      const useColorlibStepIconStyles = makeStyles({
        root: {
          backgroundColor: '#ccc',
          zIndex: 1,
          color: '#fff',
          width: 75,
          height: 75,
          display: 'flex',
          borderRadius: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        active: {
          backgroundImage: 'linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);',
          boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        },
        completed: {
          backgroundImage: 'linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);',
        },
      });




      const CustomStepIcon = (props) => {
        const classes = useColorlibStepIconStyles();
        const { active, completed } = props;
    
        const stepIcons = {
          1: <ChildCareSharpIcon size="large"/>,
          2: <EscalatorWarningIcon size="20px"/>,
          3: <FamilyRestroomIcon size="20px"/>,
          4: <HearingRoundedIcon size="20px"/>,
          5: <VaccinesSharpIcon size="20px"/>,
          6: <DriveFolderUploadRoundedIcon size="20px"/>,
        };

        CustomStepIcon.propTypes = {
            active: PropTypes.bool,
            completed: PropTypes.bool,
            icon: PropTypes.node,
          };
        
          return (
            <div
              className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
              })}
            >
              {stepIcons[String(props.icon)]}
            </div>
          );
        }






     const data = {
        name:applicationForm.name,
        email:applicationForm.email
        // gender:	allValues.gender,
        // dob:allValues.dob,
        // age:allValues.age,
        // state:allValues.state,
        // degree_of_Hearing_Loss:	allValues.degree_of_Hearing_Loss,
        // type_of_hearing_loss:allValues.type_of_hearing_loss,	
        // address:allValues.address
    };  
    const url = 'http://localhost:5000/app'; 
     async function handleSubmit(event){
        event.preventDefault();
        const response = await fetch(url,{
          method :'POST',
          cache: 'no-cache',
          headers: {
              'Content-Type':'application/json',
          },
          body : JSON.stringify(data),
         })
         const parameter =await response.json();
            console.log(parameter);
          setRegisterNumber(parameter.insertid);
      }
    
    //  const header = { 'Content-Type': 'application/json' };
//      const handleSubmit  = async(e) => {
//      e.preventDefault();
   
//     await fetch(url,{
//      method: 'POST', // *GET, POST, PUT, DELETE, etc.    
//      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached     
//      headers: header,
//      body: JSON.stringify(data) // body data type must match "Content-Type" header
//      }).then((response)=>{
//        console.log('finish api call - response:::',response);
//        const parameter = response.json();
//      if(parameter.status==='ok')
//           history('/request')
//      }).catch((error)=>{
//          console.log('something wrong:::',error);
//      });   
//      console.log(data);
     
//  };
    console.log(applicationForm)
 
    
    return (
        <Box sx={{ flexGrow: 1 }}>
              <Stepper className="st" steps={steps} orientation="horizontal" connector={<ColorlibConnector />} >
            <Step >
                <StepLabel 
                StepIconComponent={CustomStepIcon}>Child</StepLabel>
            </Step>
            <Step>
                <StepLabel
                StepIconComponent={CustomStepIcon}>Parent</StepLabel>
            </Step>
            <Step>
                <StepLabel
                StepIconComponent={CustomStepIcon}>Family</StepLabel>
            </Step>
            <Step>
                <StepLabel
                StepIconComponent={CustomStepIcon}>Hearing Status</StepLabel>
            </Step>
            <Step>
                <StepLabel
                StepIconComponent={CustomStepIcon}>Preferred Hospital</StepLabel>
            </Step>
            <Step>
                <StepLabel
                StepIconComponent={CustomStepIcon}>Document Upload</StepLabel>
            </Step>

        </Stepper>
       
    </Box> 
    )
}
export default Form;