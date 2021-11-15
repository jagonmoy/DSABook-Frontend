import Home from './pages/home'
import Appbar from './components/appbar';

function App() {

  return (
    <div>
      <Appbar/>
      <Home/>
      {/* <Container maxWidth = "lg" className = {classes.blogContainer}>
        <Typography variant="h4" className = {classes.blogTitle}  align ="center">
          Articles
        </Typography>

        <Grid container direction = 'column' justifyContent="center" alignItems="center" marginTop = "150" >

          <Grid item  xs = {12} sm = {6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jagonmoy
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs = {12} sm = {6} md={4} style = {{marginTop : 30}}>
            <Card className={classes.root} >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs = {12} sm = {6} md={4}>
             
          </Grid>
          
        </Grid>
      </Container> */}

    </div>
  );
}

export default App;
