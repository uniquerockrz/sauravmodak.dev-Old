import React, { Component } from "react";
import { Image } from 'cloudinary-react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaRss } from "react-icons/fa";


import './UserInfo.sass'

class UserInfo extends Component {
    render() {
        return(
            <div className="flex flex-col w-full gradient-background my-10 pr-12 pb-10">
                <div className="flex w-full flex-row ">
                    <div className="flex w-2/6 flex-col justify-center">
                        <div className="flex flex-row justify-center">
                            <Image publicId="webassets/public_profile_pic_300_vi3njz" width="200" className="flex rounded-lg" secure="true" />
                        </div>
                    </div>  
                    <div className="flex w-4/6 flex-col mt-16">
                        <div className="flex flex-row w-full justify-center mb-3">
                            <div className="flex text-3xl text-white font-heading font-bold">
                                Support My Work By Subscribing To My Newsletter
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-center">
                            <div className="flex text-white font-body text-2xl text-justify">
                                Let's be honest. The organic reach via social channels is very low. 
                                And to make social channels work, I have to spend a lot of time at them, which is a distraction from the main way I create value for you - writing this blog. 
                                <br /><br />
                                A newsletter helps me to deliver content directly to you, without getting involved in privacy risks which various social channels are infamous for. I promise no spam and max 2 emails a week. And you can always unsubscribe in one click if you change your mind.
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-center my-8">
                            <div className="flex">
                                <a href="https://cdn.forms-content.sg-form.com/28e12e19-9083-11ea-8d16-c2cc607c0155" target="_blank">
                                    <button class="bg-white text-primary hover:text-primaryLight font-bold py-2 px-4 rounded-full h-12">
                                        Subscribe
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-center text-white text-xl">
                            <div className="flex">
                                or follow me via 
                            </div>
                            <div className="flex self-center">
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
