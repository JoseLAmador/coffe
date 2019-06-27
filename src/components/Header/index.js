import React from 'react';

const Header = ({title, icon}) => {
    return(
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
        </nav>
    )
}

export default Header;