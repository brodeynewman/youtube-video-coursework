import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Stream from './stream';
import Home from './home';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Home />} />
    <Route exact path="/" render={() => <Stream />} />
  </Switch>
);

export default Routes;
