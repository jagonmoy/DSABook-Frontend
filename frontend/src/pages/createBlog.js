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



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Signup() {
    const classes = useStyles();
    const history = useHistory()





    const [blogHeadline, setBlogHeadline] = useState('');
    const [blogDescription, setBlogDescription] = useState('');



    function submitHandelar(e) {
        e.preventDefault()
        console.log(blogHeadline,blogDescription);
        axios({
            method: 'POST',
            url: '/api/blogs/',
            data: {blogHeadline,blogDescription},
            validateStatus: () => true
            
        },).then(res => {
            console.log(res);
          }, (error) => {
             
          }); 
      }

    
    if (localStorage.getItem('username') !== null)  return (
      <>
        <Navbar />
        <Container component="main" maxWwdth="xs">
          <div className={classes.paper} maxwidth={120}>
            <form className={classes.form} noValidate onSubmit={submitHandelar}>
              <TextField
                id="outlined-multiline-flexible"
                label="Blog Headline"
                fullWidth
                multiline
                maxRows={2}
                value={blogHeadline}
                onChange={(e) => setBlogHeadline(e.target.value)}
              />
              <TextField
                id="outlined-textarea"
                label="Blog Description"
                fullWidth
                maxRows={10}
                multiline
                value={blogDescription}
                onChange={(e) => setBlogDescription(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add Blog
              </Button>
            </form>
          </div>
        </Container>
      </>
    );
    else return (
        <h1> Page Not Authorized </h1>
    )
}
