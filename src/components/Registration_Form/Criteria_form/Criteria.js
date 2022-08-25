import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
import Container from "@mui/material/Container";
import { Button, Checkbox, Grid, Typography } from "@mui/material";
import Data from "../../../Criteria";
import Request from "../../Request_Form/Request_form";
import './Criteria.css'
 function Criteria(){
    const [submit , setSubmit] = useState(true)
    const history =useNavigate()
    const handleSubmit = event => {
        event.preventDefault();    
        setSubmit(!submit);
      };
    return(
        <Container >
          {!submit ? <div>
            <Typography  marginTop={2}>
               Criteria for Cochlear Implant surgery
            </Typography>
                
                 <form autoComplete="off" onSubmit={handleSubmit}>
                 <Grid container alignItems="left"
                    rowSpacing={0}
                     style={{
                        border:"1px solid black",
                        padding:"1rem"
                   }}
                   >
                   {Data.map(note=>
                     (
                       <Grid item key={note.id} xs={12}  min-width='auto' style={{
                         wrap:'nowrap', padding : "0"
                    }}> 
                            <Typography id="question" fontSize={6} paragraph={true}
                             style={{
                                padding:"0px",
                                textAlign:'left',
                                margin : "0"
                           }}>
                            <Checkbox size="2" required/>
                             <p>{note.note}</p>
                            </Typography>

                       </Grid>
                    ))}
                   </Grid>
                   <Button
                        type="submit"
                        variant="contained"  
                        style={{
                            minWidth: "10px",
                            minHeight: "10px",
                            fontSize:"5px",
                            float:'right'
                        }}
                     >
            Proceed for Application</Button>
                 </form>
          </div>: <div><Request/></div>} 
                
            </Container>
    )
}
export default Criteria