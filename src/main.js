import React from 'react';
import { render } from 'react-dom';
import { Router, Route, /* browserHistory, */ hashHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Welcome from './components/Welcome';
import Tenants from './components/Tenants';
import Properties from './components/Properties';

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="tenants" component={Tenants} />
      <Route path="properties" component={Properties} />
    </Route>
  </Router>,
  document.getElementById('root')
);
