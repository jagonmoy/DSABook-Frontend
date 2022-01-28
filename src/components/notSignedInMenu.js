import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function NotSignedInMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const history = useHistory();
    
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleSignUp = () => {
		history.push('/signup');
		setAnchorEl(null);
	};
	const handleSignIn = () => {
		history.push('/signin');
		setAnchorEl(null);
	};
	const handleClose = () => {
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
				<MenuIcon />
			</Button>
			<Menu
				id="fade-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				<MenuItem onClick={handleSignUp} color="primary">
					<Typography
						variant="overline"
						display="block"
						gutterBottom
						color = "primary"
					>
            SIGN UP
					</Typography>
				</MenuItem>
				<MenuItem onClick={handleSignIn} color="primary">
					<Typography
						variant="overline"
						display="block"
						gutterBottom
						color = "primary"
					>
            SIGN IN
					</Typography>
				</MenuItem>
			</Menu>
		</React.Fragment>
	);
}