import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import theme from "../theme";
import { useHistory } from "react-router-dom";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
  },
  basic: {
    marginTop: theme.spacing(3),
  },
}));

export default function Blog(props) {
  const classes = useStyles(theme);
  const history = useHistory();

  const { blog } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="primary"
            >
              {blog.blogHeadline.split(" ").join("").length > 30
                ? blog.blogHeadline.substring(0, 51).concat("...")
                : blog.blogHeadline
                    .substring(0, blog.blogHeadline.length)
                    .concat(
                      Array(51 - blog.blogHeadline.split(" ").join("").length)
                        .fill("\xa0")
                        .join(" ")
                     )
              }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {blog.blogDescription.substring(0, 40).concat('...')}
            </Typography>
            <br />
            <br />
            <Typography variant="subtitle2" component="p">
              {blog.username}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Creation Time: {moment(blog.createdAt).format("LLL")}
            </Typography>

            <Typography variant="subtitle2" color="textSecondary" component="p">
              Last Update: {moment(blog.updatedAt).format("LLL")}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              history.push(`/blogs/${blog._id}`);
            }}
          >
            Continue Reading
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
