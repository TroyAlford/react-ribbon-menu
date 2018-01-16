import React from 'react';
import logo from '../logo.svg';
import Page from '../components/Page'
import RibbonMenu from '../components/RibbonMenu';

export default (props) => (
    <Page {...props}>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
        </div>
    </Page>
)