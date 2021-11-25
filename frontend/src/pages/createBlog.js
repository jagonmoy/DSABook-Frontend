import React , {useState} from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/navbar';
import { Alert, AlertTitle } from "@material-ui/lab";
import { TextareaAutosize } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';




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
  const [popUp, setPopUp] = useState("");
  const [errorMessage, setErrorMessage] = useState('');




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
        }).then(res => {
          if (res.status === 201) {
            localStorage.setItem("popup", "Blog Created Successfully!!!!");
            history.push("./");
          }
          else {
            setPopUp("Failed")
            setErrorMessage(res.data.errors[0])
          }
          }, (error) => {
             
          }); 
      }

    
    if (localStorage.getItem('username') !== null)  return (
      <>
        <CssBaseline />
        <Navbar />
        <Container component="main" maxWwdth="xs" style = {{paddingTop: 25}}>
            <form className={classes.form} noValidate onSubmit={submitHandelar}>
              <TextField
                id="outlined-multiline-flexible"
                label="Blog Headline"
                fullWidth
                multiline
                maxRows={3}
                value={blogHeadline}
                onChange={(e) => setBlogHeadline(e.target.value)}
                style = {{paddingBottom : 20}}
              />
              <TextField
                id="outlined-textarea"
                label="Blog Description"
                fullWidth
                multiline
                value={blogDescription}
                onChange={(e) => setBlogDescription(e.target.value)}
                style = {{paddingBottom : 20}}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              
              >
                Add Blog
              </Button>
              {popUp === "Failed" && (
            <Alert severity="error" fullwidth = "true">
              <AlertTitle>Blog Creation Unsuccessfull!!</AlertTitle>
                  <strong>{errorMessage}</strong>
            </Alert>
          )}
            </form>

        </Container>
      </>
    );
    else return (
        <h1> Page Not Authorized </h1>
    )
}
