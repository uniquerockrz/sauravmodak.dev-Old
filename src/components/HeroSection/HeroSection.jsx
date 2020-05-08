import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaRss } from "react-icons/fa";

import './HeroSection.sass'

class HeroSection extends Component {
    render(){
        return (
            <div className="flex xs:mt-6 xs:flex-col sm:flex-col sm:mt-8">
                <div className="flex xs:order-2 xs:w-full xs:justify-center sm:order-2 sm:w-full sm:justify-center">
                    <Image publicId="webassets/public_profile_pic_300_vi3njz" width="300" height="400" className="flex rounded-lg" secure="true" />
                </div>
                <div className="flex xs:order-1 xs:flex-col xs:w-full sm:order-1 sm:flex-col sm:w-full">
                    <div className="flex xs:flex-col xs:items-center xs:w-full sm:flex-col sm:items-center sm:w-full">
                        <div className="flex font-heading xs:text-xl sm:text-3xl">Welcome To Saurav's Garage!</div>
                        <div className="flex font-body xs:text-xl sm:text-2xl xs:text-justify sm:text-justify xs:leading-relaxed sm:leading-relaxed xs:mt-4 sm:mt-6 text-gray-700"> 
                            <p>
                                Currently I am a <span className="text-primary font-extrabold">Data Scientist,</span> with affinity towards <span className="text-primary font-extrabold">Natural Language Processing.</span> Previously, I had worked with <span className="text-primary font-extrabold">JavaScript</span> stack, built scalable <span className="text-primary font-extrabold">Data Mining</span> Applications, fiddled a bit with <span className="text-primary font-extrabold">Robotic Process Automation</span> and delivered applications for a wide range of customers, back in my agency days. I am a <span className="text-primary font-extrabold">lifelong learner</span>, this devblog is a rough compilation of what I learn.
                            </p>
                        </div>
                        <div className="flex xs:flex-col sm:flex-col xs:w-full sm:w-full xs:items-center sm:items-center xs:my-8 sm:my-10">
                            <a href="mailto:hi@sauravmodak.dev" className="flex xs:mb-8 sm:mb-10">
                                <button className="bg-primary hover:bg-primaryLight text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded xs:text-xl sm:text-2xl">
                                    Get In Touch
                                </button>
                            </a>
                            <div className="flex xs:flex-row xs:text-4xl sm:flex-row sm:text-5xl">
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