import React, {useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import CustomizedSnackbars from './customizedSnackbar';
import { useHistory } from 'react-router-dom';
import BlogView from '../pages/blogView';

export default function EditModal({blogID,blogUnit}) {
    const [open, setOpen] = React.useState(false);
    const [blog, setblog] = useState(blogUnit);
    const [blogHeadline, setBlogHeadline] = useState(blog.blogHeadline);
    const [blogDescription, setBlogDescription] = useState(blog.blogDescription);
    const [updated, setUpdated] = useState(false);
    const history = useHistory()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(() => {
      
  },[blog])    

 const handleUpdateClose = (e) => {
        e.preventDefault()
    axios({
        method: 'PATCH',
        url: `/api/blogs/${blogID}`,
        data: {blogHeadline,blogDescription},
        validateStatus: () => true
        
    },).then(res => {
        setUpdated(true);
        localStorage.setItem('toast', "Post Updated Successfully!!")
        history.push(`./${blogID}`)
      }, (error) => {
      
    });       

    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{marginLeft : 10}} >
        EDIT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">EDIT BLOG</DialogTitle>
        <DialogContent>
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
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleUpdateClose} color="primary">
              Update
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      {updated && (
        <CustomizedSnackbars message={localStorage.getItem("toast")}/> 
      )}
    </>
  );
}
