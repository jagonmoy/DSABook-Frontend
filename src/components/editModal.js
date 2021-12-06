import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import CustomizedSnackbars from './customizedSnackbar'
import EditIcon from '@material-ui/icons/Edit';

export default function EditModal({ blogID, blogUnit }) {
  const [open, setOpen] = React.useState(false);
  const [blogHeadline, setBlogHeadline] = useState(blogUnit.blogHeadline);
  const [blogDescription, setBlogDescription] = useState(blogUnit.blogDescription);
  const history = useHistory()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    

  const handleUpdateClose = (e) => {
        e.preventDefault()
    axios({
        method: 'PATCH',
        url: `https://dsa-book.herokuapp.com/api/blogs/${blogID}`,
        data: {blogHeadline,blogDescription},
        validateStatus: () => true
        
    }).then(res => {
      localStorage.setItem('popup', "Blog Updated Successfully!!")
      history.push(`/blogs/${blogID}`)
   
      }, (error) => {
    });       

    setOpen(false);
 
   
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{marginLeft : 10}} >
        <EditIcon/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">EDIT BLOG</DialogTitle>
        <DialogContent>
            <TextareaAutosize
              id="outlined-multiline-static"
              label="Blog Headline"
              fullWidth
              multiline
              maxRows={2}
              value={blogHeadline}
            onChange={(e) => setBlogHeadline(e.target.value)}
            style = {{paddingBottom: 20}}
          />
            <TextareaAutosize
              id="outlined-multiline-static"
              label="Blog Description"
              fullWidth
              minRows={5}
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
            {localStorage.getItem('popup') !== null && <CustomizedSnackbars message={localStorage.getItem('popup')} /> }
          </DialogActions>
        </DialogContent>
      </Dialog> 
    </>
  );
}
