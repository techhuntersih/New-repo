
import React, { useEffect } from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import AlertBox from './Alertbox';
import Child from './child';
import Father from "./Father"
import Mother from './Mother';
import HearingStatus from './HearingStatus';
import Family from './Family';
import Preference from './Preference';
// import Family from './Family'
function FormApp(){
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
        HearingStatus: {
            name : "",
            email : ""
        },
        preference:{
            state1:"",
            state2:""
        }
     });
     const [registerNumber, setRegisterNumber] = useState()
     const [steps ,setSteps]=useState(0);
    //  const history = useNavigate();
    //  const changeHandler = e => {
    //     setAllValues({...allValues, [e.target.name]: e.target.value})
    //  }
    useEffect(() => {
          if(steps==6){
            handleSubmit()
          }
      },[steps]);
    const url = 'http://localhost:5000/api/create-new-application'; 
     async function handleSubmit(){
        const response = await fetch(url,{
          method :'POST',
          cache: 'no-cache',
          headers: {
              'Content-Type':'application/json',
          },
          body : JSON.stringify(applicationForm),
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
    <div>
         { steps === 0 ? <Child applicationForm={applicationForm} setApplicationForm={setApplicationForm} steps={steps} setSteps={setSteps}/>
            : steps === 1 ? <Father applicationForm={applicationForm} setApplicationForm={setApplicationForm} steps={steps} setSteps={setSteps}/> 
            : steps === 2? <Mother applicationForm={applicationForm} setApplicationForm={setApplicationForm} steps={steps} setSteps={setSteps}/>
            : steps === 3? <Family  applicationForm={applicationForm} setApplicationForm={setApplicationForm} steps={steps} setSteps={setSteps}/>
            :steps === 4?<HearingStatus applicationForm={applicationForm} setApplicationForm={setApplicationForm} steps={steps} setSteps={setSteps}/>
            :steps === 5?<Preference applicationForm={applicationForm} setApplicationForm={setApplicationForm} steps={steps} setSteps={setSteps}/>
            :steps == 6 ?<AlertBox registerNumber={registerNumber}/>:""
        } 

    </div> 
    )
}
export default FormApp