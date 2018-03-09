import React from 'react';
import { browserHistory, HashRouter, Route, Switch } from 'react-router-dom';
import {
  Board,
  NoMatch
} from 'containers';

const Routes = () => (
  <HashRouter history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Board} />
      <Route component={NoMatch} />
    </Switch>
  </HashRouter>
);

export default Routes;
