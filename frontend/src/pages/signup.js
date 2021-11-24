import React , {useState} from 'react';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Navbar from '../components/navbar';
import Home from './home';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',  
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {
  const classes = useStyles();
  const history = useHistory()
 


  const [name,setName] = useState('');
  const [userName,setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [popUp, setPopUp] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');
  
  function submitHandelar(e) {
    e.preventDefault()
    console.log(name,userName,email);
    axios({
        method: 'POST',
        url: '/api/auth/signup/',
        data: { name,username : userName,email,password,confirmPassword },
        validateStatus: () => true
    }).then(res => {
      if (res.status === 200) {
        localStorage.setItem('popup', 'Account Created Successfully')
        setPopUp('Success');
      }
      else {
        setPopUp('Failed');
        setErrorMessage(res.data.errors[0])
      }
      }, (error) => {
         setPopUp('Failed');
         console.log(error);
      }); 
  }

  if ( localStorage.getItem('username') === null ) return (
    <>
    <Navbar/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandelar}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick = {()=>history.push('./signin')} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          <Grid item style={{ marginTop : 20 }}>
          {popUp === "Success" && history.push('./signin')
           }
          {popUp === "Failed" && (
            <Alert severity="error">
              <AlertTitle>Sign Up Unsuccessfull!!</AlertTitle>
                  <strong>{errorMessage}</strong>
            </Alert>
          )}
          </Grid>
        </form>
      </div>
      </Container>
    </>
  );
  else return <Home/>
}