import React, { useState, useEffect } from 'react';
import Template from './template';
import {  TextField, Button, Typography, Paper  } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './containerStyles';
const Layout = () => {
    const [postData, setPostData] = useState({ email:'', selectedFile: '' });
   
    const classes = useStyles();
  
  
  
    const handleSubmit = async (postData) => {
      console.log("function called")
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(postData.email)))
  {
    alert("You have entered an invalid email address!")
    setPostData({email:""})
  }
    
      console.log(postData);
  
    };
  
    return (
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={(e)=>handleSubmit(postData)}>
          <div className={classes.header}><Typography variant="h5">DNB SEARCH AUTOMATION TOOL</Typography></div>
          <div className={classes.flexLayout}>
              <div sm="4" style={{ fontWeight: 400 }}>Upload the file for DNB search</div><input id="fileSelect" type="file" value={postData.selectedFile} onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value })} accept=".csv" /><Template /> </div>
              
          <div className={classes.flexLayout}><div style={{ fontWeight: 400 }}>Enter email to export output file through mail</div><TextField name="email" variant="outlined" label="Email" fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
         
        </form>
      </Paper>
    );
  };
  
  export default Layout;