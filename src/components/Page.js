import React from 'react'
import { Link } from 'react-router-dom'
import RibbonMenu from './RibbonMenu'

export default ({ children, menus }) => (
    <div className="page">
        <RibbonMenu menus={menus} />
        <div className="page-contents">
            {children}
        </div>
        <ul>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/home">Home</Link></li>
        </ul>
        {styles}
    </div>
);

const styles = <style jsx>{`
    div.page-contents {
        padding: 15px;
        text-align: center;
    }
`}</style>