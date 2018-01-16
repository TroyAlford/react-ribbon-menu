import React from 'react';
import Menu from './Menu';
import menus from '../data/Data.json';

const RibbonMenu = () => (
  <div className="ribbon-menu-container">
    <div className="ribbon-menu">
      {menus.map(({ title, menuItems }) =>
        <Menu
          title={title}
          menuItems={menuItems}
        />
      )}
    </div>
    {styles}
  </div>
);

const styles = <style jsx>{`
  .ribbon-menu-container {
    position: relative;
    height: 60px;
  }

  div.ribbon-menu {
      background-color: gray;
      box-sizing: border-box;
      padding: 4px;
      position: absolute;
      overflow: visible;
      text-align: left;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
  }
`}</style>


export default RibbonMenu;
