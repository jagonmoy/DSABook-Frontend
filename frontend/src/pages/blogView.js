import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import theme from "../theme";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/navbar";
import { Container } from "@material-ui/core";
import EditModal from "../components/editModal";
import DeleteModal from "../components/deleteModal";

const useStyles = makeStyles((theme) => ({
  root: {
    //paddingBottom: theme.spacing(3),
  },
  basic: {
    marginTop: theme.spacing(3),
    width: theme.spacing(100),
    display: "block",
    width: "60vw",
    transitionDuration: "0.3s",
    height: "180vw",
  },
  // title: {
  //    fontWeight: 800,
  //    paddingBottom : theme.spacing(3),
  //    paddingTop : theme.spacing(3),
  //  }
}));

export default function BlogView() {
  const classes = useStyles(theme);
  let { blogID } = useParams();



  const [blog, setblog] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/blogs/${blogID}`,
      validateStatus: () => true,
    }).then(
      (res) => {
        const Blog = res.data.data;
        setblog(Blog);
      },
      (error) => {
        console.log(error);
      }
    );
  },[localStorage.getItem('popup')]);

  return (
    <>
      <Navbar />
      <Container
        styles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          className={classes.basic}
          alignItems="center"
          justify="center"
        >  
          <Typography gutterBottom variant="h5" component="h2">
            {blog.blogHeadline}
              </Typography>
                 <Typography
            gutterBottom
            variant="h6"
            component="h3"
            position="static"
          >
            {blog.blogDescription}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            {blog.username}
          </Typography>
              <div>
            {blog.username === localStorage.getItem("username") && (
              <DeleteModal blogID={blogID} />
            )}
            {blog.username === localStorage.getItem("username") && (
              <EditModal blogID={blogID} blogUnit={blog} />
            )}
          </div>
        </Grid>
      </Container>
    </>
  );

  // return <h1>{blog.username}</h1>
}
