import React, { Component } from 'react';
import { Link } from "gatsby";

import "./NavBar.sass";

class NavBar extends Component {
    render() {
        return (
            <div className="sd-navbar-shadow">
                <div className="container xs:max-w-full xs:px-8 sd-navbar-border xs:pb-2 sm:max-w-full sm:px-12 sm:pb-6">
                    <nav className="flex xs:items-center bg-white xs:flex-col sm:items-center sm:flex-col">
                        <div className="flex xs:items-center sm:items-center xs:mb-2 sm:mb-4">
                            <Link to="/" className="text-gray-900 hover:text-primaryLight xs:font-extrabold sm:font-extrabold font-heading xs:tracking-wide xs:text-3xl sm:tracking-wide sm:text-4xl xs:link-underline sm:link-underline">Saurav Modak</Link>
                        </div>
                        <div className="flex xs:items-center xs:w-full xs:justify-center sm:items-center sm:w-full sm:justify-center">
                            <ul className="flex xs:items-center xs:flex-row xs:justify-around xs:w-full sm:items-center sm:flex-row sm:justify-around sm:w-full">
                                <li className="hover:bg-primaryLight h-12 rounded-md flex"><Link to="/about" className="font-body xs:text-2xl sm:text-3xl text-gray-900 hover:text-white xs:link-underline sm:link-underline">About</Link></li>
                                <li className="hover:bg-primaryLight h-12 rounded-md flex"><Link to="/contact" className="font-body xs:text-2xl sm:text-3xl text-gray-900 hover:text-white xs:link-underline sm:link-underline">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>            
        );
    }
}

export default NavBar;