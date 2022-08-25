
import React from 'react';
import { Checkbox } from '@material-ui/core';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
function CheckboxForm (){
    return(
       <div>
         <Typography><p>
            <Checkbox size="2" required/>
            <u1>I have read the ADIP Scheme and abide by ADIP scheme, Guidelines of CI and Corrigendum.</u1></p>
            <p>
            <Checkbox size="2" required/>
            
                <u1>Meanwhile we are continuing speech language stimulation of child with hearing aids and will continue to take child for post surgical rehabilitation.</u1></p>
         </Typography>
         <Button variant='contained'>Submit</Button>
        </div>
        
    )
}
export default CheckboxForm;
