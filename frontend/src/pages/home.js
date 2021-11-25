import React , {useState,useEffect} from 'react';
import axios from "axios";
import Blog from  '../components/blog'
import { makeStyles } from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import theme from '../theme';
import Navbar from '../components/navbar';
import { Pagination } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';



const useStyles = makeStyles((theme) => ({
  blogContainer: {
    paddingTop: theme.spacing(2),
    // paddingRight: theme.spacing(70),
  },

}));


export default function Home() {
    const classes = useStyles(theme);
    const [blogs, setblogs] = useState([]);
    const [page, setPage] = React.useState(1);
    const [totalPage, setTotalPage] = React.useState(1);
    const history = useHistory()
    document.title = "BlOG"
  
     
    useEffect(() => {
      axios({
          method: 'GET',
          url: `/api/blogs?page=${page}&limit=6`,
          validateStatus: () => true
      }).then(res => {
        if (res.status === 200) {
          const allBlogs = res.data.data;
          setblogs(allBlogs);
        }
      
        }, (error) => {
          console.log(error)
      });
    },[page]);

    const handleChange = (event, value) => {
      setPage(value);
    };
  
    function totalPageNumber() {
      axios({
        method: "GET",
        url: `/api/blogs`,
        validateStatus: () => true,
      }).then(
        (res) => {
          setTotalPage(res.data.data.length);
        },
        (error) => {
          console.log(error);
        }
      );
      return totalPage;
    }
    
    return (
      <>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="lg" >
        <br/>
        <Typography variant="h3" gutterBottom component="div" align="center" color = "primary">
          BLOGS
        </Typography>
        
          <Grid container spacing={3}>
           {blogs.map((blog) => (
              <Blog blog={blog} key={blog.id} shorText={"summary"} />
            ))}
          </Grid>
          <Grid
          container
          direction="column"
          justify="center"
            alignItems="center"
            style={{ paddingTop: 25 }}
            position = "static"
          >
            <Pagination className={classes.paginate} count={Math.ceil(totalPageNumber() / 6)} variant="outlined" color="primary" onChange={handleChange} style={{paddingBottom: 20}}/>
          </Grid>
          
        </Container>
        {/* {()=>setTimeout(function(){ window.localStorage.removeItem("popup") }, 2000)} */}
      </>
        
    );
}

// <Container component="main" maxWidth="xs">
// <CssBaseline />
// <div className={classes.paper}>
//   <Avatar className={classes.avatar}>
//     <LockOutlinedIcon />
//   </Avatar>
//   <Typography component="h1" variant="h5">
//     Sign in
//   </Typography>
//   <form className={classes.form} noValidate onSubmit={submitHandelar}>
//     <TextField
//       variant="outlined"
//       margin="normal"
//       required
//       fullWidth
//       id="email"
//       label="Email Address"
//       name="email"
//       autoComplete="email"
//       autoFocus
//       onChange={(e) => setEmail(e.target.value)}
//     />
//     <TextField
//       variant="outlined"
//       margin="normal"
//       required
//       fullWidth
//       name="password"
//       label="Password"
//       type="password"
//       id="password"
//       autoComplete="current-password"
//       onChange={(e) => setPassword(e.target.value)}
//     />
//     <Button
//       type="submit"
//       fullWidth
//       variant="contained"
//       color="primary"
//       className={classes.submit}
//     >
//       Sign In
//     </Button>
//      <Grid item>
//     <Link onClick={()=>history.push('./signup')}variant="body2">
//           {"Don't have an account? Sign Up"}
//       </Link>
//     </Grid>
//     <Grid item style={{ marginTop : 20 }}>
//     {popUp === "Failed" && (
//       <Alert severity="error">
//         <AlertTitle>Sign in Unsuccessfull!</AlertTitle>
//         <strong>Wrong email or Password</strong>
//       </Alert>
//         )}
//       {popUp === "Success" &&  history.push('./') }
//     </Grid>
//   </form>
//   </div>
// </Container>

{/* <ThemeProvider theme={theme}>
<CssBaseline />
<Container maxWidth="lg">
  <Header title="Blog" sections={sections} />
  <main>
    <MainFeaturedPost post={mainFeaturedPost} />
    <Grid container spacing={4}>
      {featuredPosts.map((post) => (
        <FeaturedPost key={post.title} post={post} />
      ))}
    </Grid>
    <Grid container spacing={5} sx={{ mt: 3 }}>
      <Main title="From the firehose" posts={posts} />
      <Sidebar
        title={sidebar.title}
        description={sidebar.description}
        archives={sidebar.archives}
        social={sidebar.social}
      />
    </Grid>
  </main>
</Container>
<Footer
  title="Footer"
  description="Something here to give the footer a purpose!"
/>
</ThemeProvider> */}