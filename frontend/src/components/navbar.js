import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import theme from '../theme'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#fff'
  }
}));

function Navbar() {
  const classes = useStyles(theme);
  const history = useHistory()
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
          <Grid justifyContent="space-between" >
            <Button onClick={()=> history.push('./signup')} variant="contained" color="primary" style={{ marginRight: 10 }} > SIGN UP </Button>
            <Button onClick={() => history.push('./signin')} variant="contained" color="primary"> SIGN IN</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
