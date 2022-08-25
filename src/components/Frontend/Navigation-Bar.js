import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Popup from '../Popup';
import{AppBar, Tab, Tabs, Toolbar, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

const styles = {
    tab: {
        minWidth: 10 ,
        color: '#ffffff'
    }
}

// const useStyles = makeStyles((theme) => ({
//     customOne: {
//        padding: '3rem 15rem',
//        flexGrow: 1
//        backgroundColor: theme.palette.background.paper,
//        fontFamily: 'Open Sans',
//     },
//     customTwo: {
//        padding: '0rem',
//        color: '#484848',
//        backgroundColor: 'white',
//        fontFamily: 'Open Sans',
//        fontSize: '1rem',
//    },
//   }))


const NavigationBar =()=> {
    const [open, setOpen] = React.useState(false);
    const [recordforPreview,setRecordforPreview]=React.useState({});
    const row = "Eoookokocwdkciceicni"
    const handleOpen = () => {
        setOpen(true);
        setRecordforPreview(row)
    };
    return(

        <React.Fragment>
            <AppBar sx={{ background:'#2f1045'}}>
                <Toolbar>
              <Tabs>
            

               <Tabs style={{justifyContent :'space-between' }}/>
               <Tabs sx={{marginleft:'auto'}} />
                <Tab indicatorColor={'white'}/>
              
                <Tab   label = "HOME"  style={styles.tab}  />
                <Tab   label = "    "  style={styles.tab}  />

                <Tab  label="ABOUT THE SCHEME"  style={styles.tab} />
                <Tab   label = "  "  style={styles.tab}  />
                

                <Tab label="HOW TO APPLY"  style={styles.tab} />
    
          
                
                </Tabs>

                <div>
                    
                <InputBase sx={{marginleft:'auto'}} indicatorcolor={'white'} style={{
                    backgroundColor:"white", 
                    borderRadius:10,
                
                }} 
                placeholder="Search...."
                onClick={()=>{
                    handleOpen()
                }} />
            
        
                <IconButton sx={{marginleft:'auto'}}>

                <SearchIcon sx={{marginleft:'auto'}}  indicatorColor={'white'}  style={styles.tab}/>
                
                
                </IconButton>
              
                </div>
        
        </Toolbar>

      </AppBar>
      {open && <Popup open={open} setOpen={setOpen} data={recordforPreview}/>}
  </React.Fragment>
    )
    
}

export default NavigationBar ;
