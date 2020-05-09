import React, { Component } from "react";
import { Image } from 'cloudinary-react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaRss } from "react-icons/fa";


import './UserInfo.sass'

class UserInfo extends Component {
    render() {
        return(
            <div className="flex xs:flex-col xs:w-full gradient-background xs:my-6 sm:flex-col sm:w-full sm:my-8">
                <div className="flex xs:w-full xs:flex-col sm:w-full sm:flex-row sm:h-full">
                    <div className="flex xs:flex-col xs:hidden sm:flex-row sm:w-1/3 sm:h-full">
                        <div className="flex xs:flex-row xs:justify-center sm:flex-row sm:justify-center sm:w-full sm:h-full sm:items-start">
                            <Image publicId="webassets/public_profile_pic_300_vi3njz" className="flex rounded-lg sm:w-4/5 sm:mt-20" secure="true" />
                        </div>
                    </div>  
                    <div className="flex xs:flex-col xs:mt-4 xs:w-full xs:items-center sm:flex-col sm:w-2/3 sm:mt-6 sm:items-center">
                        <div className="flex xs:flex-row xs:w-4/5 xs:mb-3 sm:flex-row sm:w-full sm:justify-center sm:mb-5">
                            <div className="flex xs:text-3xl text-white font-heading font-bold xs:text-center sm:text-3xl sm:text-center sm:w-full">
                                Support My Work By Subscribing To My Newsletter
                            </div>
                        </div>
                        <div className="flex xs:flex-row xs:w-4/5 sm:flex-row sm:w-full sm:justify-center">
                            <div className="flex text-white font-body xs:text-2xl text-justify sm:text-2xl sm:w-11/12">
                                Let's be honest. The organic reach via social channels is very low. 
                                And to make social channels work, I have to spend a lot of time at them, which is a distraction from the main way I create value for you - writing this blog. 
                                <br /><br />
                                A newsletter helps me to deliver content directly to you, without getting involved in privacy risks which various social channels are infamous for. I promise no spam and max 2 emails a week. And you can always unsubscribe in one click if you change your mind.
                            </div>
                        </div>
                        <div className="flex flex-row xs:w-full xs:justify-center xs:my-8 sm:w-full sm:justify-center sm:my-12">
                            <div className="flex">
                                <a href="https://cdn.forms-content.sg-form.com/28e12e19-9083-11ea-8d16-c2cc607c0155" target="_blank">
                                    <button className="bg-white text-primary hover:text-primaryLight font-bold py-2 px-4 rounded-full xs:text-2xl sm:text-3xl">
                                        Subscribe
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="flex xs:flex-col xs:w-full xs:items-center text-white xs:text-2xl sm:flex-col sm:w-full sm:items-center">
                            <div className="flex xs:mb-2 sm:mb-4 sm:mb-4 xs:text-base sm:text-lg sm:justify-center">
                                or follow me via 
                            </div>
                            <div className="flex xs:text-3xl xs:mb-6 sm:text-4xl sm:mb-8 sm:justify-center">
                                <a href="https://www.linkedin.com/in/sauravmodak/" target="_blank">
                                    <FaLinkedinIn className="mx-2 text-white" />
                                </a>
                                <a href="https://www.instagram.com/sauravmodak.dev/" target="_blank">
                                    <FaInstagram className="mx-2 text-white" />
                                </a>
                                <a href="https://twitter.com/sauravmodakdev" target="_blank">
                                    <FaTwitter className="mx-2 text-white" />
                                </a>
                                {/* <FaFacebook className="mx-2 text-primary hover:text-primaryLight" /> */}
                                <a href="https://sauravmodak.dev/rss.xml" target="_blank">
                                    <FaRss className="mx-2 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;
