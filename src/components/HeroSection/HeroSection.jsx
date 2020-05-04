import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaLinkedinIn, FaRss } from "react-icons/fa";

import './HeroSection.sass'

class HeroSection extends Component {
    render(){
        return (
            <div className="flex sd-hero-section m-8">
                <div className="flex w-2/5">
                    <Image publicId="webassets/public_profile_pic_300_vi3njz" width="300" height="400" className="rounded-lg" />
                </div>
                <div className="flex w-3/5 flex-col">
                    <div className="flex flex-col">
                        <div className="flex font-heading text-5xl ml-8">Welcome To Saurav's Garage!</div>
                        <div className="flex font-body text-2xl text-justify leading-relaxed mt-6 text-gray-700 ml-6"> 
                            <p>
                                Currently I am a <span className="text-primary font-extrabold">Data Scientist,</span> with affinity towards <span className="text-primary font-extrabold">Natural Language Processing.</span> Previously, I had worked with <span className="text-primary font-extrabold">JavaScript</span> stack, built scalable <span className="text-primary font-extrabold">Data Mining</span> Applications, fiddled a bit with <span className="text-primary font-extrabold">Robotic Process Automation</span> and delivered applications for a wide range of customers, back in my agency days. I am a <span className="text-primary font-extrabold">lifelong learner</span>, this devblog is a rough compilation of what I learn.
                            </p>
                        </div>
                        <div className="flex ml-6 mt-8 flex-row">
                            <button className="bg-primary hover:bg-primaryLight text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded h-16">
                                Get In Touch
                            </button>
                            <div className="flex text-5xl mt-2 ml-3">
                                <FaGithub className="mx-2 text-primary hover:text-primaryLight" />
                                <FaLinkedinIn className="mx-2 text-primary hover:text-primaryLight" />
                                <FaInstagram className="mx-2 text-primary hover:text-primaryLight" />
                                <FaTwitter className="mx-2 text-primary hover:text-primaryLight" />
                                <FaFacebook className="mx-2 text-primary hover:text-primaryLight" />
                                <FaRss className="mx-2 text-primary hover:text-primaryLight" />
                            </div>                            
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default HeroSection;