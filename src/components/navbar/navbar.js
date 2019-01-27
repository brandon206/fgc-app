import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render () {
        const navStyle = {
            padding: '0 8px'
        }
        return (
            <nav style = {navStyle} className = "deep-purple lighten-1">
                <div className="nav-wrapper">
                    <Link to = "/" className = "brand-logo">FGC App</Link>

                    <ul className = "right">
                        <li>
                            <Link to = "/" >Home</Link>
                        </li>
                        <li>
                            <Link to = "/player-profile">Player Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;