import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaRss } from "react-icons/fa";

import './HeroSection.sass'

class HeroSection extends Component {
    render(){
        return (
            <div className="flex xs:my-6 xs:flex-col">
                <div className="flex xs:order-2 xs:w-full">
                    <Image publicId="webassets/public_profile_pic_300_vi3njz" width="300" height="400" className="rounded-lg" secure="true" />
                </div>
                <div className="flex xs:order-1 xs:flex-col xs:w-full">
                    <div className="flex xs:flex-col xs:items-center xs:w-full">
                        <div className="flex font-heading xs:text-xl">Welcome To Saurav's Garage!</div>
                        <div className="flex font-body xs:text-xl xs:text-justify xs:leading-relaxed xs:mt-4 text-gray-700"> 
                            <p>
                                Currently I am a <span className="text-primary font-extrabold">Data Scientist,</span> with affinity towards <span className="text-primary font-extrabold">Natural Language Processing.</span> Previously, I had worked with <span className="text-primary font-extrabold">JavaScript</span> stack, built scalable <span className="text-primary font-extrabold">Data Mining</span> Applications, fiddled a bit with <span className="text-primary font-extrabold">Robotic Process Automation</span> and delivered applications for a wide range of customers, back in my agency days. I am a <span className="text-primary font-extrabold">lifelong learner</span>, this devblog is a rough compilation of what I learn.
                            </p>
                        </div>
                        <div className="flex xs:flex-col xs:w-full xs:items-center xs:my-6">
                            <a href="mailto:hi@sauravmodak.dev" className="flex xs:mb-4">
                                <button className="bg-primary hover:bg-primaryLight text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded h-16">
                                    Get In Touch
                                </button>
                            </a>
                            <div className="flex xs:flex-row xs:text-3xl">
                                <a href="https://github.com/uniquerockrz" target="_blank">
                                    <FaGithub className="mx-2 text-primary hover:text-primaryLight" />
                                </a>
                                <a href="https://www.linkedin.com/in/sauravmodak/" target="_blank">
                                    <FaLinkedinIn className="mx-2 text-primary hover:text-primaryLight" />
                                </a>
                                <a href="https://www.instagram.com/sauravmodak.dev/" target="_blank">
                                    <FaInstagram className="mx-2 text-primary hover:text-primaryLight" />
                                </a>
                                <a href="https://twitter.com/sauravmodakdev" target="_blank">
                                    <FaTwitter className="mx-2 text-primary hover:text-primaryLight" />
                                </a>
                                <a href="https://t.me/sauravmodak" target="_blank">
                                    <FaTelegramPlane className="mx-2 text-primary hover:text-primaryLight" />
                                </a>
                                {/* <FaFacebook className="mx-2 text-primary hover:text-primaryLight" /> */}
                                <a href="https://sauravmodak.dev/rss.xml" target="_blank">
                                    <FaRss className="mx-2 text-primary hover:text-primaryLight" />
                                </a>
                            </div>                            
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default HeroSection;