import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import theme from '../theme';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import {Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
    paddingBottom: theme.spacing(3),
    // width : theme.spacing(100)
    },
    basic: {
      marginTop : theme.spacing(3) ,
      // width : theme.spacing(100)
    }
}));


export default function Blog(props) {


  const classes = useStyles(theme);
  const history = useHistory()

    const {blog} = props ;

   
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      // className={classes.basic}
      // allign="center"
      // alignItems='center'
      // justify="center"
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="primary"
            >
              {blog.blogHeadline}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {blog.blogDescription.substring(0,50)}
            </Typography>
            <br />
            <br />
            <Typography variant="subtitle2" component="p">
              {blog.username}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              created At {<Moment parse="YYYY-MM-DD HH:mm" interval={30000} >
                {blog.createdAt}
              </Moment>}
            </Typography>
              
            <Typography variant="subtitle2" color="textSecondary" component="p">
              updated At {<Moment parse="YYYY-MM-DD HH:mm" interval={30000}> 
                {blog.updatedAt}
              </Moment>}
            </Typography>
            

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              history.push(`/blogs/${blog.id}`);
            }}
          >
            Coninue Reading
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
