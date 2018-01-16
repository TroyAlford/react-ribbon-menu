import React from 'react';
import Menu from './Menu';
import menus from '../data/Data.json';

const RibbonMenu = () =>
    <div>
      <div>
        {menus.map(({ title, menuItems }) =>
        <Menu
          title={title}
          menuItems={menuItems}/>
        )}
      </div>
    </div>

export default RibbonMenu;
