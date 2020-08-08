import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Stream from './stream';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Home />} />
    <Route exact path="/stream/:slug" render={() => <Stream />} />
  </Switch>
);

export default Routes;
