import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import theme from '../theme'
import { useHistory } from 'react-router-dom';
import CustomizedSnackbars from './customizedSnackbar';
import NotSignedInMenu from './notSignedInMenu';
import SignedInMenu from './signedInMenu';



const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#fff'
  }
}));


function Navbar() {
  const classes = useStyles(theme);
  const history = useHistory()

  


  return (
    <AppBar className={classes.appbar} position={"static"}>
      <Toolbar>
        <Grid justifyContent="space-between" container spacing={1}>
          <Typography
            onClick={() => history.push("./")}
            variant="h6"
            color="primary"
          >
            DSABook
          </Typography>
          <div>
            {localStorage.getItem("username") === null && <NotSignedInMenu/>}
            {localStorage.getItem("username") !== null && <SignedInMenu/>}
            {localStorage.getItem("popup") !== null && (
              <CustomizedSnackbars message={localStorage.getItem("popup")} />
            )}
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

