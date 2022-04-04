import React, { useState, useEffect } from 'react';
import Template from './template';
import {  TextField, Button, Typography, Paper  } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './containerStyles';
const Layout = () => {
    const [postData, setPostData] = useState({ email:'', selectedFile: '' });
   
    const classes = useStyles();
  
  
    const clear = () => {
      
      setPostData({ email:'',selectedFile: '' });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
    };
  
    return (
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <div className={classes.header}><Typography variant="h5">DNB SEARCH AUTOMATION TOOL</Typography></div>
          <div className={classes.flexLayout}>
              <div sm="4" style={{ fontWeight: 400 }}>Upload the file for DNB search</div><input id="fileSelect" type="file" accept=".csv" /><Template /> </div>
              
          <div className={classes.flexLayout}><div style={{ fontWeight: 400 }}>Enter email to export output file through mail</div><TextField name="email" variant="outlined" label="Email" fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
         
        </form>
      </Paper>
    );
  };
  
  export default Layout;