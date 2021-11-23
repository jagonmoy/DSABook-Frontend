import React , {useState,useEffect} from 'react';
import axios from "axios";
import {Container} from '@material-ui/core';
import Blog from  '../components/blog'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import theme from '../theme';
import Navbar from '../components/navbar';



const useStyles = makeStyles((theme) => ({
  blogContainer: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(70),
  },
  title: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(40),
    
  },
}));


export default function Home() {

    const classes = useStyles(theme);
    const [blogs, setblogs] = useState([]);
    // const [page, setPage] = useState(1);
    document.title = "BlOG"
  
     
    useEffect(() => {
      axios({
          method: 'GET',
          url: '/api/blogs/',
          validateStatus: () => true
      }).then(res => {
        const allBlogs = res.data.data;
            
        setblogs(allBlogs);
        }, (error) => {
          console.log(error)
        }); 
    }, [blogs]);
    
    return (
      <>
        <Navbar />
        <Container className={classes.blogContainer}  allign="center"
        alignItems='center'
        justify="center">
          <Typography variant="h4" className={classes.title} >
            BLOGS
          </Typography>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {blogs.map((blog) => (
              <Blog blog={blog} key={blog.id} shorText={"summary"} />
            ))}
          </Grid>
        </Container>
        {setTimeout(function(){ window.localStorage.removeItem("popup") }, 2000)}
      </>
        
    );
}
