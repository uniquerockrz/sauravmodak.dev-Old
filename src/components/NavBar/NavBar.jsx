import React, { Component } from 'react';

import "./NavBar.sass";

class NavBar extends Component {
    render() {
        return (
            <div className="sd-navbar-shadow">
                <div className="container mx-auto max-w-800 sd-navbar-border">
                    <nav className="flex items-center bg-white sd-navbar">
                        <div className="flex items-center flex-shrink-0 min-w-1/4">
                            <a href="#" className="text-gray-900 hover:text-primaryLight font-normal font-heading tracking-wide text-5xl">Saurav Modak</a>
                        </div>
                        <div className="flex items-center justify-end flex-shrink flex-grow">
                            <ul className="flex items-center">
                                <li className="hover:bg-primaryLight h-12 rounded-md"><a href="#" className="font-body text-3xl mx-8 text-gray-900 hover:text-white">About</a></li>
                                <li className="hover:bg-primaryLight h-12 rounded-md"><a href="#" className="font-body text-3xl mx-8 text-gray-900 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>            
        );
    }
}

export default NavBar;