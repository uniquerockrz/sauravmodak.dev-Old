import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.sass";

class Footer extends Component {
    render() {
        const { config } = this.props;
        const url = config.siteRss;
        const { copyright } = config;
        if (!copyright) {
            return null;
        }
        return (
            <footer className="flex mb-10 w-full justify-center align-center">
                <div className="flex text-heading text-xl text-gray-600 text-center">
                    Unless otherwise stated, all content is under a&nbsp;<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" className="text-primaryLight">Creative Commons</a>&nbsp;License.&nbsp;<a href="https://github.com/uniquerockrz/sauravmodak.dev" target="_blank" className="text-primaryLight">Handcrafted</a>&nbsp;by me using&nbsp;<a href="https://www.gatsbyjs.org/" target="_blank" className="text-primaryLight">Gatsby</a>&nbsp;&&nbsp;<a href="https://tailwindcss.com/" target="_blank" className="text-primaryLight">Tainwind.css</a>. Hosted on&nbsp;<a href="https://www.netlify.com/" target="_blank" className="text-primaryLight">Netlify CDN.</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
