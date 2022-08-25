// import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function FileUpload({applicationForm, setApplicationForm,steps,setSteps}) {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

//   const onsubmit =  (e) => {
//     if(validate()) {
//        console.log(validate())
//        setApplicationForm({
//            ...applicationForm,
//            displayChild: displayChild
//        })
       
//         setSteps(steps+1);
//    }
// }

  return (
    <div className="App">
        <div>
        <div className="container form">
        <div className='row'>
        <h5>Child Picture :</h5>
        <div className="12">
        <form onSubmit={handleSubmit}>
          <p>1.Passport Size Photo Of The Child</p>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        </div>

    </div>
    </div>
    </div>
    <div>
        <div className="container form">
        <h5>Mandatory documents to be attached along with the Application :</h5>
        <p> Important Instruction: Merge scanned copy of all relevant documents in single pdf file for convenience and to save space. All diagnostic reports must be from an authorized/registered professional only</p>
        <div className='row'>
        <div className="12">
        <form onSubmit={handleSubmit}>
          <p>1. Birth Certificate of the child</p>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        </div>
        <div>
        <div className="col-lg-12 col-12">
        <form onSubmit={handleSubmit}>
          <p>2. Caste Certificate, if belongs to SC/ST</p>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        </div>
        </div>
        <div className="col-lg-12 col-12">
        <form onSubmit={handleSubmit}>
          <p>3. Income certificate</p>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        </div>
        <div className="12">
        <form onSubmit={handleSubmit}>
          <p>4. Hearing Disability Certificate</p>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        </div>
        <div className="12">
        <form onSubmit={handleSubmit}>
          <p>5. Hearing evaluation reports (Audiogram/ABR/IA/OAE/Other)</p>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        </div>
        <div className="12">
        <form onSubmit={handleSubmit}>
          <p>6. Speech & Language Evaluation Report</p>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        </div>
        <div className="12">
        <form onSubmit={handleSubmit}>
          <p>7. Psychological Evaluation Report</p>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        </div>
        <div className="col-lg-12 col-12">
        <form onSubmit={handleSubmit}>
          <p>8. Medical evaluation report (ENT/Neurologist/Pediatrician/Registered Medical Professional)</p>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        </div>
        <div className="12">
        <form onSubmit={handleSubmit}>
          <p>9. Radiological evaluation ( Printed report of CT/MRI),if avilable</p>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default FileUpload;