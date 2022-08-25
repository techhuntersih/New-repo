import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Request from './components/Request_Form/Request_form';
import Form from "./components/Registration_Form/Applicationform/ApplicationClone"
import FormApp from './components/Registration_Form/Applicationform/Application';
import CheckApplicationStatus from './components/Registration_Form/Applicationform/CheckApplicstionDetails';
import Login from './components/ADMIN/Login';
import Home from './components/ADMIN/Home';
import Frontend from './components/Frontend/Frontend';
import HospitalsLogin from './components/LOGINS-PROFESSIONALS/HospitalLogin';
import Postoperativerehablitation from './components/LOGINS-PROFESSIONALS/Postrehabilation';
import ActivationMapping from './components/LOGINS-PROFESSIONALS/ActivationMapping';
import HospitalEmpanelment from './components/Request_Form/Hospital Empannelment/HospitalEmpalenment';
import Download from './components/Request_Form/PDFS-component/Pre_and_post_services';
import ProfeesionalLogin from './components/LOGINS-PROFESSIONALS/ProfeessionalLogin';
import HospitalLogin from './components/LOGINS-PROFESSIONALS/HospitalLogin';
import { Checkbox, Stepper } from '@mui/material';
import CheckboxForm from './components/Registration_Form/Applicationform/Checkbok';
import Screenreader from './components/Frontend/ScreenReader';
function App() {
  return (
    <div className="App">
      <div></div>
       <BrowserRouter>
         <Routes>
            {/* <Route path='/crit' exact element={<Criteria/>}/> */}
            {/* <Route path='/criteria' exact element={<Criteria/>}/>  */}
           <Route path='/request' exact element={<Request/>}/> 
           <Route path='/application-form' exact element={<FormApp/>}/>
           <Route path='/application' exact element={<Form/>}/>
           <Route path='/' exact element={<Frontend/>}/>
           <Route path='/admin/login' exact element={<Login/>}/>
           <Route path='/admin/home' exact element={<Home/>}/>
           <Route path='/hospitallogin' exact element={<ProfeesionalLogin/>}/>
           <Route path='/hospital-login' exact element={<HospitalsLogin/>}/>
           <Route path='/postrehabilation' exact element={<Postoperativerehablitation/>}/>
           <Route path='/activationmapping' exact element={<ActivationMapping/>}/>
           <Route path='/hospitalempalenment' exact element={<HospitalEmpanelment/>}/>
           <Route path='/checkapplicationstatus' exact element={<CheckApplicationStatus/>}/>
           <Route path='/prepostservices' exact element={<Download/>}/>
           <Route path='/checkbox' exact element={<CheckboxForm/>}/>
           <Route path='/screen' exact element={<Stepper/>}/>
           {/* <Route path='/check' exact element={<CheckApplicationStatus/>}/> */}
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
