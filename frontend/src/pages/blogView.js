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
import Moment from 'react-moment';
import 'moment-timezone';

const useStyles = makeStyles((theme) => ({
  root: {
    //paddingBottom: theme.spacing(3),
  },
  basic: {
    marginTop: theme.spacing(3),
    width: theme.spacing(100),
    display: "block",
    width: "100%",
    transitionDuration: "0.3s",
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
  }, [localStorage.getItem("popup"), blog]);

  return (
    <React.Fragment>
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
          <Typography Typography variant="body2" gutterBottom>
            {blog.blogDescription}
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
              created At:
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              <Moment parse="YYYY-MM-DD HH:mm" interval={30000}>
                {blog.createdAt}
              </Moment>
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              style={{ paddingRight: 5 }}
            >
              updated At:
            </Typography>
            <Typography variant="caption" display="block" gutterBottom   style={{ paddingBottom: 15 }}>
              <Moment parse="YYYY-MM-DD HH:mm" interval={30000}>
                {blog.updatedAt}
              </Moment>
            </Typography>
          </Grid>
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
    </React.Fragment>
  );

  // return <h1>{blog.username}</h1>
}
