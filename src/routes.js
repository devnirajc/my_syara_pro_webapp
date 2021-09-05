import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Subscription } from './containers/index';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/subscription' exact component={Subscription}></Route>
      </Switch>
    </Router>
  )
}

export default Routes
