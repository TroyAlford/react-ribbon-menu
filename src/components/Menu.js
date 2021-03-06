import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ title, menuItems }) => (
  <ul className="menu">
    {menuItems.map((menuItem) =>
      <MenuItem key={menuItem.text} {...menuItem} />
    )}
    <div className="title">{title}</div>
    {styles}
  </ul>
);

const styles = <style jsx>{`
  ul.menu {
    background-color: #cfe2d8;
    border-radius: 2px;
    border: 1px solid #aeceb9;
    box-shadow: inset 0px 5px 10px 0px #cfe2d8;
    box-sizing: border-box;
    float: left;
    font-family: Verdana;
    font-size: 10px;
    height: 100%;
    list-style: none;
    margin: 0 4px 0 0;
    max-height: 100%;
    min-height: 100%;
    overflow: hidden;
    padding: 0 0 16px 0;
    position: relative;
    text-align: left;
    top: 0;
    transition: max-height 1s;
    width: 150px;
    z-index: 999;
  }

  ul.menu:hover {
    height: auto;
    max-height: 100vh;
  }

  div.title {
    background-color: #afcdbd;
    bottom: 0;
    color: #25686b;
    font-weight: bold;
    height: 14px;
    padding: 2px 0;
    position: absolute;
    text-align: center;
    width: 100%;
  }

  div.title:after {
    border-color: transparent #25686b #25686b transparent;
    border-style: solid;
    border-width: 3px;
    content: '';
    display: inline-block;
    position: absolute;
    right: 2px;
    bottom: 2px;
  }
`}</style>

export default Menu;
