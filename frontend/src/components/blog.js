import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
      paddingBottom : theme.spacing(3),
    },
    basic: {
      marginTop : theme.spacing(3) ,
    }
}));


export default function Blog(props) {
    const classes = useStyles();
     
    const {blog,username} = props ;
    console.log("Hello");
    useEffect(() => {
        console.log("blog is called")
    },[blog.updatedAt])

    return (
        <Grid item xs={12} sm={6} md={4} className = {classes.basic} style = {{width : 600}} allign = 'center'>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {blog.blogHeadline}
                        </Typography>
                        <Typography gutterBottom variant="h12" component="h3">
                            {blog.username}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {blog.blogDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    
                    <Button size="small" color="primary">
                        Coninue Reading
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
