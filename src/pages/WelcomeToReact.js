import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import RibbonMenu from '../components/RibbonMenu';

export default () =>
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <RibbonMenu />
        <p className="App-intro">
            <ul>
              <li><Link to="/account">Account</Link></li>
              <li><Link to="/home">Home</Link></li>
            </ul>
        </p>
    </div>
