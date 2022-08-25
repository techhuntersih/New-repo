import React, { useEffect } from "react";
import { border, Box} from "@mui/system";
import { Table, TableBody, Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@mui/material/TableCell";
import { tabClasses, TableContainer } from "@mui/material";
function SearchPopup({open,setOpen}){
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
          <Typography>Hiiii</Typography>
         </Modal>
      </div>
    )
}
export default SearchPopup