import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import ComingSoon from './ComingSoon';
import Inventory from './Inventory';
import NotFound from './NotFound';
import StorePicker from './StorePicker';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ComingSoon} />
      <Route path="/store-picker" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route path="/inventory" component={Inventory} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
