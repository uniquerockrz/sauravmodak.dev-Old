/* eslint-disable react/jsx-indent */
import React from "react";
import Helmet from "react-helmet";
import { CloudinaryContext} from 'cloudinary-react';

import config from "../../data/SiteConfig";

import "./minireset.min.css";
import './index.sass';
import '../css/global.sass';

import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

export default class MainLayout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <CloudinaryContext cloudName="sauravmodakdev">
                <div id="main">
                    <NavBar />
                    <div className="container mx-auto max-w-800">
                        <Helmet>
                            <meta name="description" content={config.siteDescription} />
                            <html lang="en" />
                        </Helmet>
                        {children}
                    </div>
                    <Footer config={config} />
                </div>
            </CloudinaryContext>
        );
    }
}
