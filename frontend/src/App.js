import React from 'react';
import Home from './pages/home'
import Signup from './pages/signup';
import Signin from './pages/signin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path = "/signin" component = {Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
