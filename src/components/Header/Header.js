import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className='nav-container'>
            <div className='logo-name'>
                <h1><span>Best</span> School</h1>
            </div>
            <div className='nav-list'>  
                <Link to='/'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;