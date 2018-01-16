import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({text, iconPath, url}) => (
  <li className="menu-item">
    <img className="icon" src={iconPath} />
    {url ? <Link to={url}>{text}</Link> : text}
    {styles}
  </li>
);

const styles = <style jsx>{`
  li.menu-item {
    box-sizing: border-box;
    height: 20px;
    margin: 4px 0;
    padding: 5px;
    position: relative;
    text-indent: 30px;
  }

  .icon {
    position: absolute;
    left: 10px;
    top: 4px;
  }
`}</style>

export default MenuItem;
