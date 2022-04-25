import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import useStyles from './AuthStyles';
import { Link} from 'react-router-dom';

const initialState = { email: '', password: '' };

const SignIn = () => {
    const [form, setForm] = useState(initialState);
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          
        </Avatar>
        <Typography component="h1" variant="h5">Sign in</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
    <TextField  variant="outlined" name="email" required fullWidth label="Email:" autoFocus="on" type= "text"/>
  </Grid>
  <Grid item xs={12} sm= {12}>
    <TextField variant="outlined" name ="password" required fullWidth label="password:" autoFocus="on" type= "password"
    />
  </Grid> 
  <Grid></Grid>
  <Button component={Link} to="/web-app/container" type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            SIGN IN
          </Button>
              </Grid></form>
      </Paper>
    </Container>);
};
export default SignIn;