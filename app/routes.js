import React from 'react';
import { browserHistory, HashRouter, Route, Switch } from 'react-router-dom';
import {
  Portfolio,
  NoMatch
} from 'containers';

const Routes = () => (
  <HashRouter history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Portfolio} />
      <Route component={NoMatch} />
    </Switch>
  </HashRouter>
);

export default Routes;
