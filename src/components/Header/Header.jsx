import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <nav className='nav-item'>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/service">Service</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Header;