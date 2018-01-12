import React, { Component } from 'react';
// import {  Link } from 'react-router-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Route
            exact path="/"
            component={Home} />
        </BrowserRouter>
    );
  }
}
