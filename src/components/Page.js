import React from 'react'
import RibbonMenu from './RibbonMenu'

export default ({ children, menus }) => (
    <div className="page">
        <RibbonMenu menus={menus} />
        <div className="page-contents">
            {children}
        </div>
        {styles}
    </div>
);

const styles = <style jsx>{`
    div.page-contents {
        padding: 15px;
        text-align: center;
    }
`}</style>