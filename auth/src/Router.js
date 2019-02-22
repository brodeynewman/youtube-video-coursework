import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Unauth from './pages/unauth';
import Dashboard from './pages/dashboard';

const Router = () => (
  <Switch>
    <Route exact path="/" render={Home} />
    <Route exact path="/dashboard" render={Dashboard} />
    <Route exact path="/unauthenticated" render={Unauth} />
  </Switch>
);

export default Router;
