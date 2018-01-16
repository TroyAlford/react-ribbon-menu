import React from 'react';


const MenuItem = ({text, iconPath}) =>
    <li className="menuItem">
      <img src={iconPath} />
      {text}
    </li>

export default MenuItem;
