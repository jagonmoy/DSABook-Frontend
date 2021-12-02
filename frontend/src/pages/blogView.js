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
import CssBaseline from '@material-ui/core/CssBaseline';
import moment from "moment";


const useStyles = makeStyles((theme) => ({
  root: {

  },
  basic: {
    marginTop: theme.spacing(3),
    display: "block",
    width: "100%",
    transitionDuration: "0.3s",
  },

}));

export default function BlogView() {
  const classes = useStyles(theme);
  let { blogID } = useParams();
  const [story, setStory] = useState("");
  const [blog, setblog] = useState([]);
  const checkPopUp = localStorage.getItem('popup');

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/blogs/${blogID}`,
      validateStatus: () => true,
    }).then(
      (res) => {
        if (res.status === 200) {
          const Blog = res.data.data;
          setTimeout(function () {
            setblog(Blog);
            setStory(Blog.blogDescription);
          }, 1000);
          setTimeout(function () {
            window.localStorage.removeItem("popup")
          }, 500);
         
        }
      },
      (error) => {
        console.log(error);
      }
    );
  
  }, [checkPopUp]);

  return (
    <>
      <CssBaseline/>
      <Navbar />
      <Container
        styles={{
          display: "flex",
        }}
      >
        <Grid item className={classes.basic}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            color="primary"
            fontWeight="bold"
            style={{ paddingBottom: 15 }}
          >
            {blog.blogHeadline}
          </Typography>
          <Typography Typography variant="body1" gutterBottom>
            {story.toString().split("\n").map((i, key) => {
              return <p key={key}>{i}</p>;
            })}
          </Typography>
          <br />
          <br />
          <Grid container item xs={12}>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              style={{ paddingRight: 5 }}
            >
              Authored by
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              {blog.username}
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              style={{ paddingRight: 5 }}
            >
              Creation Time: 
            </Typography>

            <Typography variant="caption" display="block" gutterBottom>
              {moment(blog.createdAt).format('LLL')}
            </Typography>

          </Grid>

          <Grid container item xs={12}>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              style={{ paddingRight: 5 }}
            >
              Last Update:
            </Typography>

            <Typography
              variant="caption"
              display="block"
              gutterBottom
              style={{ paddingBottom: 15 }}
            >
              {moment(blog.updatedAt).format('LLL')}
            </Typography>
          </Grid>
          <div style = {{paddingBottom : 20}}>
            { (blog.username === localStorage.getItem("username") || "admin" === localStorage.getItem("username")) && (
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

}
