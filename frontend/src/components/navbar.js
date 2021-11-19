import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import theme from '../theme'
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#fff'
  }
}));


function Navbar() {

  const classes = useStyles(theme);
  const history = useHistory()


  function signOutFunctionality() {
    axios({
      method: "POST",
      url: "/api/auth/signout/",
      validateStatus: () => true,
    }).then(
      (res) => {
        window.localStorage.removeItem("username");
        history.push("./signin");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <AppBar className={classes.appbar} position="static">
      <Toolbar>
        <Grid
          justifyContent="space-between"
          container
          spacing={1}
        >
          <Typography onClick = {() => history.push('./')}variant="h6" color="primary">
           MyBlog
          </Typography>
          <Grid justifyContent="space-between" >
            {localStorage.getItem('username') === null && <Button onClick={() => history.push('./signup')} variant="contained" color="primary" style={{ marginRight: 10 }} > SIGN UP </Button>}
            {localStorage.getItem('username') === null && <Button onClick={() => history.push('./signin')} variant="contained" color="primary"> SIGN IN</Button>}
            {localStorage.getItem('username') !== null && <Typography color="primary" style={{ marginRight: 10 }} > {localStorage.getItem('username')}</Typography>}
            {localStorage.getItem('username') !== null && <Button onClick={() => history.push('./createBlog')} variant="contained" color="primary" style={{ marginRight: 10 }} > CREATE BLOG</Button>}
            {localStorage.getItem('username') !== null && <Button onClick={() => signOutFunctionality()} variant="contained" color="primary"> SIGN OUT</Button>}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
