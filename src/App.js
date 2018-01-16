import React, { Fragment } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import WelcomeToReact from './pages/WelcomeToReact';
import './App.css';

import menus from './data/Data.json';

export default () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={() => <WelcomeToReact menus={menus} />} />
      <Route path="/account" component={() => <Account menus={menus} />} />
      <Route path="/home" component={() => <Home menus={menus} />} />
    </Fragment>
  </BrowserRouter>
)
