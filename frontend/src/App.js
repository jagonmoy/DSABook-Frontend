import React from 'react';
import Home from './pages/home'
import Signup from './pages/signup';
import Signin from './pages/signin';
import CreateBlog from './pages/createBlog';
import BlogView from './pages/blogView';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditModal from './components/editModal';
function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/createBlog" component={CreateBlog}/>
          <Route exact path= "/:blogID" component ={BlogView}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
