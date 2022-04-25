import React, { useState} from 'react';
import Template from './template';
import {  TextField, Button, Typography, Paper  } from '@material-ui/core';import FileBase from 'react-file-base64';
import useStyles from './containerStyles';

import { UploadData } from './Api';
import { schema } from './JSONSchema';
import Papa from "papaparse";
const Layout = () => {
    const [postFile, setPostFile] = useState({ selectedFile: '' });
   
    const classes = useStyles();
   
    const JSONParser = (data)=>{
      
      const result = {rows:[]}
     
      for(var i=1; i<data.length-1;i++){
        let k = 0;
        while(k<data[0].length)
        {
        var obj = schema 
        for(var j in obj.content){
          obj.content[j]["content"] = data[i][k]
          k++
           }
      }
      result.rows.push(obj)
         }
          setPostFile(result)
          console.log(result)
          }
    
      const handleSubmit = (event) => {
            event.preventDefault();
            UploadData(postFile)
          }
   

  
    return (
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <div className={classes.header}><Typography variant="h5">DNB SEARCH AUTOMATION TOOL</Typography></div>
          <div className={classes.flexLayout}>
          <div sm="4" style={{ fontWeight: 400 }}>Upload the file for DNB search</div>
              <input
        type="file"
        accept=".csv"
        onChange={(e) => {
        const files = e.target.files;
          if (files) {
             Papa.parse(files[0], {
              dynamicTyping: true,
              complete: function(results) {
                 JSONParser(results.data)
              }}
            )
          }
        }}
      />
       <Template /> </div>
              <div className={classes.flexLayout}><div style={{ fontWeight: 400 }}>Enter email to export output file through mail</div><TextField name="email" variant="outlined" label="Email" fullWidth /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
         
        </form>
      </Paper>
    );
  };
  
  export default Layout;