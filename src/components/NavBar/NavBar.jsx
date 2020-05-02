import React, { Component } from 'react';

import { FcGlobe } from 'react-icons/fc';

class NavBar extends Component {
    render() {
        return (
            <div className="sd-navbar-shadow">
                <div className="container mx-auto">
                    <nav className="flex items-center bg-white sd-navbar">
                        <div className="flex items-center flex-shrink-0 text-3xl min-w-1/4">
                            <FcGlobe />
                            <a href="#" className="text-gray-900 font-medium font-heading tracking-wide ml-2">Saurav Modak</a>
                        </div>
                        <div className="flex items-center justify-end flex-shrink flex-grow">
                            <ul className="flex items-center">
                                <li className="hover:bg-gray-200 h-10 rounded-md"><a href="#" className="font-body text-2xl text-gray-700 mx-8">About</a></li>
                                <li className="hover:bg-gray-200 h-10 rounded-md"><a href="#" className="font-body text-2xl text-gray-700 mx-8">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>            
        );
    }
}

export default NavBar;