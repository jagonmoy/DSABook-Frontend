import React , {useEffect} from 'react';
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

const useStyles = makeStyles((theme) => ({
    root: {
      paddingBottom: theme.spacing(3),  
    },
    basic: {
      marginTop : theme.spacing(3) ,
      width : theme.spacing(100)
    }
}));


export default function Blog(props) {

console.log("kisher vitor")

  const classes = useStyles(theme);
  const history = useHistory()

    const {blog} = props ;
    useEffect(() => {
    }, [blog.updatedAt])

   
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        className={classes.basic}
        allign="center"
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {blog.blogHeadline}
              </Typography>
              <Typography gutterBottom variant="h6" component="h3">
                {blog.username}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {blog.blogDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => { history.push(`/${blog.id}`) }}
            >
              Coninue Reading
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
}
