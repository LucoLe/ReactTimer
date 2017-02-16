import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Timer} />
    <Route path="countdown" component={Countdown} />
  </Route>
);
