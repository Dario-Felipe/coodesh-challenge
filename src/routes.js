import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/page=1" />
      <Route path="/page=:page" component={Home} />
      <Route path="/404">
        <h2>404 - Página não encontrada!</h2>
      </Route>
      <Redirect from="*" to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
