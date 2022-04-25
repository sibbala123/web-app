import React, { useState, useEffect } from 'react';
import {  TextField, Button, Typography, Paper  } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './containerStyles';
const UploadFile = () => {
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
          <div className={classes.header}><Typography variant="h6">DNB Search Automation Tool</Typography></div>
          <div className={classes.flexLayout}>
              <div sm="4">Upload the file for DNB search</div><FileBase sm ="4" type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
           <div className={classes.template} ><Template /></div>   
          <div className={classes.flexLayout}><div>Provide email to recieve results in mail</div><TextField name="email" variant="outlined" label="Email" fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
         
        </form>
      </Paper>
    );
  };
  
  export default Layout;