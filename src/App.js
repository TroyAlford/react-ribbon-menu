import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import WelcomeToReact from './pages/WelcomeToReact';
import './App.css';

export default () => (
  <BrowserRouter>
    <Route exact path="/" component={WelcomeToReact}>
      <Route path="account" component={Account} />
      <Route path="home" component={Home} />
    </Route>
  </BrowserRouter>
)
