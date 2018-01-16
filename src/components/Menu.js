import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ title, menuItems }) =>
    <ul>
      {menuItems.map((menuItem) =>
        <MenuItem {...menuItem} />
      )}
      <div>{title}</div>
    </ul>

export default Menu;
