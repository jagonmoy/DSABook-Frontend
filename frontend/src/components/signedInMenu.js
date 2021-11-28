import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

export default function SignedInMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
    const history = useHistory()
    
    function signOutFunctionality() {
        axios({
          method: "POST",
          url: "/api/auth/signout/",
          validateStatus: () => true,
        }).then(
          (res) => {
            window.localStorage.removeItem("username");
            history.push("/signin");
          },
          (error) => {
            console.log(error);
          }
        );
      }
    
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleSignOut = () => {
        signOutFunctionality();
        setAnchorEl(null);
    };
    const handleCreateBlog = () => {
        history.push('/new-blog')
        setAnchorEl(null);
    };
    


    return (
        <React.Fragment>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="primary"
        >
          {localStorage.getItem("username")}
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleSignOut} color="primary">
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              color = "primary"
            >
              SIGN OUT
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCreateBlog} color="primary">
          <Typography
              variant="overline"
              display="block"
              gutterBottom
              color = "primary"
          >
            CREATE BLOG
            </Typography>
          </MenuItem>
        </Menu>
      </React.Fragment>
    )
}