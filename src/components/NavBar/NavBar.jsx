import React, { Component } from 'react';
import { Link } from "gatsby";

import "./NavBar.sass";

class NavBar extends Component {
    render() {
        return (
            <div className="sd-navbar-shadow">
                <div className="container xs:max-w-full xs:px-8 sd-navbar-border xs:pb-2">
                    <nav className="flex xs:items-center bg-white xs:flex-col">
                        <div className="flex xs:items-center">
                            <Link to="/" className="text-gray-900 hover:text-primaryLight xs:font-extrabold font-heading xs:tracking-wide xs:text-3xl">Saurav Modak</Link>
                        </div>
                        <div className="flex xs:items-center xs:w-full xs:justify-center">
                            <ul className="flex xs:items-center xs:flex-row xs:justify-around xs:w-full">
                                <li className="hover:bg-primaryLight h-12 rounded-md flex"><Link to="/about" className="font-body xs:text-2xl text-gray-900 hover:text-white">About</Link></li>
                                <li className="hover:bg-primaryLight h-12 rounded-md flex"><Link to="/contact" className="font-body xs:text-2xl text-gray-900 hover:text-white">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>            
        );
    }
}

export default NavBar;