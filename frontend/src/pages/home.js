import React , {useState,useEffect} from 'react';
import axios from "axios";
import Blog from  '../components/blog'
import { makeStyles } from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import theme from '../theme';
import Navbar from '../components/navbar';
import { Pagination } from '@material-ui/lab';
import CssBaseline from '@material-ui/core/CssBaseline';



const useStyles = makeStyles((theme) => ({
  blogContainer: {
    paddingTop: theme.spacing(2),
  },

}));


export default function Home() {
    const classes = useStyles(theme);
    const [blogs, setblogs] = useState([]);
    const [page, setPage] = React.useState(1);
    const [totalPage, setTotalPage] = React.useState(1);
    document.title = "BlOG"
  
     
    useEffect(() => {
      axios({
          method: 'GET',
          url: `/api/blogs?page=${page}&limit=6`,
          validateStatus: () => true
      }).then(res => {
        if (res.status === 200) {
          const allBlogs = res.data.data;
          setblogs(allBlogs);
        }
      
        }, (error) => {
          console.log(error)
      });
    },[page]);

    const handleChange = (event, value) => {
      setPage(value);
    };
  
    function totalPageNumber() {
      axios({
        method: "GET",
        url: `/api/blogs`,
        validateStatus: () => true,
      }).then(
        (res) => {
          setTotalPage(res.data.data.length);
        },
        (error) => {
          console.log(error);
        }
      );
      return totalPage;
    }
    
    return (
      <>
        <CssBaseline/>
        <Navbar />
        <Container maxWidth="lg" >
        <br/>
          <br />
          <br/>
          <Grid container spacing={3}>
           {blogs.map((blog) => (
              <Blog blog={blog} key={blog.id} shorText={"summary"} />
            ))}
          </Grid>
          <Grid
          container
          direction="column"
          justifyContent="center"
            alignItems="center"
            style={{ paddingTop: 25 }}
            position = "static"
          >
            <Pagination className={classes.paginate} count={Math.ceil(totalPageNumber() / 6)} variant="outlined" color="primary" onChange={handleChange} style={{paddingBottom: 20}}/>
          </Grid>
          
        </Container>
      </>
        
    );
}
