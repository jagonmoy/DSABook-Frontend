import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import theme from '../theme'

const useStyles = makeStyles((theme) => ({
  appbar : {
    backgroundColor: '#fff'
  }
}));

function Appbar() {
  const classes = useStyles(theme);

  return (
      <AppBar className={classes.appbar} position="static">
          <Toolbar>
              <Grid
                  justifyContent="space-between"
                  container
                  spacing={1}
              >
                  <Typography variant="h6" color="primary">
                      Home
                  </Typography>
                  <Grid justifyContent = "space-between" > 
                  <Button onClick={() => { alert('SIGNUP is Pressed') }} variant="contained" color="primary" style = {{marginRight : 10}} > SIGN UP </Button>
                  <Button onClick={() => { alert('SIGNIN is Pressed') }} variant="contained" color="primary"> SIGN IN</Button>
                  </Grid>
              </Grid>
          </Toolbar>
      </AppBar>
  );
}

export default Appbar;
