import React from 'react';
import { Link } from "react-router-dom";

const Header = props => (
    <header className="App-header">
        <ul className="container">
            <li>
                <Link to="/">Brad Newman Developer</Link>
            </li>
            <li>
                <Link to="/new">New Post</Link>
            </li>
        </ul>    
    </header>
);

export default Header;