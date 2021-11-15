import React , {useState,useEffect} from 'react';
import axios from "axios";
import {Container} from '@material-ui/core';
import Blog from  '../components/blog'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    blogContainer: {
      paddingTop: theme.spacing(1),
    },
    title: {
      fontWeight: 800,
      paddingBottom : theme.spacing(3),
      paddingTop : theme.spacing(3),
    }
}));


export default function Home() {
    const classes = useStyles();
    const [blogs,setblogs] = useState([]);
     
    useEffect(() => {
        console.log("Home is called")
        axios.get("http://192.168.0.115:3010/api/blogs/").then((res) => {
            console.log(res);
            const allBlogs = res.data.blogs;
            console.log(allBlogs);
            setblogs(allBlogs);
            console.log(blogs)
        }).catch((err) => { console.log(err) });
    },[]);   

    return (
        <Container maxWidth="lg" className={classes.blogContainer}>
            <Typography variant="h4" className={classes.title} align="center">
               BLOGS
            </Typography>
            <Grid container direction='column' justifyContent="center" alignItems="center" >
                {
                    blogs.map((blog) => (
                        <Blog blog={blog} key={blog.username} />
                    ))
                }
            </Grid>
        </Container>
    );
}
