import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import AppLink from '../AppLink/AppLink';
//3. path set
//use AppLink raper components to Active link style
const Header = () => {
    return (
        <nav className='nav-item'>
            <AppLink to="/">Home</AppLink>
            <AppLink to="/users">Users</AppLink>
            <AppLink to="/service">Service</AppLink>
            <AppLink to="/about">About</AppLink>
        </nav>
    );
};

export default Header;