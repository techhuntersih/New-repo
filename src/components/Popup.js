import React, { useEffect } from "react";
import { border, Box} from "@mui/system";
import { Table, TableBody, Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@mui/material/TableCell";
import { tabClasses, TableContainer } from "@mui/material";
function Popup({open,setOpen,data}){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:600,
        height:600,
        bgcolor: '#fffcf7',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(()=>{
        // data.father_details=JSON.parse(data.father_details)
         console.log("data : ", data)
    },[])
    return(
      <div>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                    <TableContainer  sx={{
    height: 500    
  }}>
                    <TableBody>
                        <TableRow><TableCell fullWidth><Typography sx={{
                            background:"black",
                            border:"1px solid red"
                        }}>APPLICATION DETAILS</Typography></TableCell></TableRow>
                    <TableRow>
                        <TableCell>
                           ChilD Details
                        </TableCell>
                        <TableCell>
                          Application id:  {data.id}<br></br>
                          Applicant Name: {data.name}<br></br>
                          Date of Birth:{data.date_of_birth}<br></br>
                          Gender: {data.gender}<br></br>
                          State: {data.state}<br></br>
                          Email: {data.email}<br></br>
                          Degree_of_Hearing_loss : {data.degree_of_hearing_loss}<br></br>
                          Type_of_Hearing_Loss: {data.type_of_hearing_loss}<br></br>
                            </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                           Father Details
                        </TableCell>
                        <TableCell>
                         Name: {data.father_details.name}<br></br>
                         Age: {data.father_details.age}<br></br>
                         Religion:{data.father_details.religion}<br></br>
                         Profession: {data.father_details.profesion}<br></br>
                         Educational : {data.father_details.education}<br></br>
                         Email: {data.father_details.email}<br></br>
                         permanent address:{data.father_details.permanent_address}<br></br>
                         communication address:{data.father_details.communication_address}<br></br>
                         residence_number:{data.father_details.residence_number}<br></br>
                         Income :{data.father_details.income}<br></br>
                         aadhaar_card_number:{data.father_details.aadhaar_card_number}
                            </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                           Mother Details
                        </TableCell>
                        <TableCell>
                         Name: {data.mother_details.name}<br></br>
                         Age: {data.mother_details.age}<br></br>
                         Religion:{data.mother_details.religion}<br></br>
                         Profession: {data.mother_details.profesion}<br></br>
                         Educational : {data.mother_details.education}<br></br>
                         Email: {data.mother_details.email}<br></br>
                         permanent address:{data.mother_details.permanent_address}<br></br>
                         communication address:{data.mother_details.communication_address}<br></br>
                         residence_number:{data.mother_details.residence_number}<br></br>
                         Income :{data.mother_details.income}<br></br>
                         aadhaar_card_number:{data.mother_details.aadhaar_card_number}
                            </TableCell>
                    </TableRow>
                </TableBody>
                    </TableContainer>
               
            </Box>
         </Modal>
      </div>
    )
}
export default Popup