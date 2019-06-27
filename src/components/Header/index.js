import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({title, icon}) => {
    return(
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>

            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
        </nav>
    )
}

export default Header;