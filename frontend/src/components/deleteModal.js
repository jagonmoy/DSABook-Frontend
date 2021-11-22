import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomizedSnackbars from './customizedSnackbar';
import { useHistory } from 'react-router-dom';
import axios from "axios";

export default function DeleteModal({blogID}) {
    const [open, setOpen] = React.useState(false);
    const [yes, setYes] = React.useState(false);
    const [no, setNo] = React.useState(false);
    const [toastShow, setToastShow] = React.useState(false);
    const history = useHistory()

   

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      console.log("hello From HandleClose");

      setOpen(false);
    };
    const handleYesClose = () => {
        axios({
            method: 'DELETE',
            url: `/api/blogs/${blogID}`,
            validateStatus: () => true
            
        },).then(res => {
            console.log(res);
          }, (error) => {
             
        }); 

        setYes(true);
        localStorage.setItem("toast","Post Deleted SuccessFully!!");
        setOpen(false);
    };

 
 


  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen} >
        DELETE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleYesClose} color="primary" autoFocus>
            Yes
         </Button>
        </DialogActions>
          </Dialog>
          {yes && history.push('./') }
    </>
  );
}
