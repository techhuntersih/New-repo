import * as React from 'react';
import axiosInstance from "../../axiosInstance"
import CustomSnackBar from "../CustomSnackBar";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Button, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate} from "react-router-dom"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Popup from '../Popup';
// import TabPanel from '@mui/lab/TabPanel';


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    // [`&.${tableCellClasses.body}`]: {
    //   fontSize: 14,
    // },
}));

export default function HospitalLogin() {
    const [openSnakBar, setOpenSnackBar] = React.useState(false);
    const [snackBarConfig, setSnanckBarConfig] = React.useState({
        message: "",
        type: ""
    });
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      axiosInstance.get('/filtered-application-details-HOD', {
        params : {
            status : newValue === "2" ? "eligible" : "not_eligible"
        }
      })
      .then((response) => {
        console.log("in filtered status : ",  response)
        setData(response.data.data);
        setFilteredData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
    };
    const history = useNavigate()
    // function rand() {
    //     return Math.round(Math.random() *10) - 10;
    // }
    // function getModalStyle() {
    //     const top = 50 + rand();
    //     const left = 50 + rand();
    //     return {
    //         top: `${top}%`,
    //         left: `${left}%`,
    //         transform: `translate(-${top}%, -${left}%)`,
    //     };
    // }
    // const classes = useStyles();
    // const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [recordforPreview,setRecordforPreview]=React.useState({});
    const handleOpen = (row) => {
        setOpen(true);
        setRecordforPreview(row)
    };
  
    const [data, setData] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleSearch = (event) => {
        const filteredApplications = data.filter(
            row => {
              return (
                row
                .name
                .toLowerCase()
                .includes(event.target.value.toLowerCase()) ||
                row
                .email
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
              );
            }
        );
        setFilteredData(filteredApplications);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    
    React.useEffect(() => {
        if( value === "1") {
            setOpenSnackBar(true)
            setSnanckBarConfig({
                ...snackBarConfig,
                message : "loading ....",
                type: "success"
            })
            axiosInstance.get('/get-applciation-details-Hospitallogin')
            .then((response) => {
                setOpenSnackBar(true)
                console.log(response)
                setData(response.data.data);
                setFilteredData(response.data.data)
                setSnanckBarConfig({
                    ...snackBarConfig,
                    message : "Loaded Successfully",
                    type: "success"
                })
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    history('/admin/login');
                }
                console.log(error);
            })
        }
    },[value])
    const updateStatus = (id, status) => {
        axiosInstance.put('/updatestatus', { status: status, id: id }).then(
          (response) => {
            console.log(response)
            setData(
                data.filter((val) => {
                  return val.id != id;
                })
            );
            setFilteredData(
                filteredData.filter((val) => {
                  return val.id != id;
                })
            );
          }
        );
      };

    return (
        <div>
            <Container component={Paper} >
                <Container >
                    <Grid container sx={{marginTop : 5, marginBottom: 5,justifyContent:'space-between'}}>
                      <Grid item xs={4}>
                         <TextField sx ={{marginTop:2}}
                                            autoFocus
                                            onChange={handleSearch}
                                            placeholder="Search by name,email.."
                                            name="Search"
                                            fullWidth
                                            variant='standard'/>
                        </Grid>
                     <Grid item xs={4}>
                     <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="ALL" value="1" />
                        <Tab label="ELIGIBLE" value="2" />
                        <Tab label="NOT ELIGIBLE" value="3" />
                    </TabList>
                    </Box>
                </TabContext>
                    </Grid>
                 </Grid>
              </Container>
                <Container>
                  <TabContext value={value}>
                             <TabPanel value="1"> <TableContainer component={Paper}>
                                <Table aria-label="custom pagination table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="left">Application No</StyledTableCell>
                                            <StyledTableCell align="left">Applicant Name</StyledTableCell>
                                            <StyledTableCell align="left">Age</StyledTableCell>
                                            <StyledTableCell align="left">Phone Number</StyledTableCell>
                                            <StyledTableCell align="left">Email</StyledTableCell>
                                            <StyledTableCell align="left">Actions</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {(rowsPerPage > 0
                                        ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : filteredData
                                    ).map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="left">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.age}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.contact_no}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.email}
                                            </TableCell>
                                            <TableCell align="left">
                                            <Button  variant="contained" sx={{padding:1,fontSize:11,marginRight:2,alignItems:"center"}} startIcon={<RemoveRedEyeIcon />} onClick={()=>{handleOpen(row)}}>View</Button>
                                                <Button  variant="contained" sx={{padding:1,fontSize:12,marginRight:2}} color="success" onClick={()=>{updateStatus(row.id, "eligible")}}>Eligible</Button>
                                                <Button variant="contained" sx={{padding:1,fontSize:12}} color="error" onClick={()=>{updateStatus(row.id, "not_eligible")}}>Not Eligible</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}

                                    {/* {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                        </TableRow>
                                    )} */}
                                    </TableBody>
                                    <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={6}
                                            count={data.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: {
                                                'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            }}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                        />
                                    </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer></TabPanel>
                    <TabPanel value="2">  <TableContainer component={Paper}>
                                <Table aria-label="custom pagination table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="left">Application No</StyledTableCell>
                                            <StyledTableCell align="left">Applicant Name</StyledTableCell>
                                            <StyledTableCell align="left">Age</StyledTableCell>
                                            <StyledTableCell align="left">Phone Number</StyledTableCell>
                                            <StyledTableCell align="left">Email</StyledTableCell>
                                            <StyledTableCell align="left">Actions</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {(rowsPerPage > 0
                                        ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : filteredData
                                    ).map((row, index) =>(
                                        <TableRow key={index}>
                                            <TableCell align="left">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.age}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.contact_no}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.email}
                                            </TableCell>
                                            <TableCell align="left">
                                            <Button  variant="contained" sx={{padding:1,fontSize:11,marginRight:2,alignItems:"center"}} startIcon={<RemoveRedEyeIcon />} onClick={()=>{handleOpen(row)}}>View</Button>
                                                <Button  variant="contained" sx={{padding:1,fontSize:12,marginRight:2}} color="success" onClick={()=>{updateStatus(row.id, "not_eligible")}}>Make Not Eligible</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                    <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={6}
                                            count={data.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: {
                                                'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            }}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                        />
                                    </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer></TabPanel>
                    <TabPanel value="3">  <TableContainer component={Paper}>
                                <Table aria-label="custom pagination table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="left">Application No</StyledTableCell>
                                            <StyledTableCell align="left">Applicant Name</StyledTableCell>
                                            <StyledTableCell align="left">Age</StyledTableCell>
                                            <StyledTableCell align="left">Phone Number</StyledTableCell>
                                            <StyledTableCell align="left">Email</StyledTableCell>
                                            <StyledTableCell align="left">Actions</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {(rowsPerPage > 0
                                        ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : filteredData
                                    ).map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="left">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.age}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.state}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.email}
                                            </TableCell>
                                            <TableCell align="left">
                                            <Button  variant="contained" sx={{padding:1,fontSize:11,marginRight:2,alignItems:"center"}} startIcon={<RemoveRedEyeIcon />} onClick={()=>{handleOpen(row)}}>View</Button>
                                                <Button  variant="contained" sx={{padding:1,fontSize:12,marginRight:2}} color="success" onClick={()=>{updateStatus(row.id, "eligible")}} >Make Eligible</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                    <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={6}
                                            count={data.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: {
                                                'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            }}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                        />
                                    </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer></TabPanel>
                 </TabContext>
                </Container>
             </Container>
            {openSnakBar && <CustomSnackBar open={openSnakBar} setOpen={setOpenSnackBar} message={snackBarConfig.message} type={snackBarConfig.type}/>}
            {open && <Popup open={open} setOpen={setOpen} data={recordforPreview}/>}
        </div>
    )
}