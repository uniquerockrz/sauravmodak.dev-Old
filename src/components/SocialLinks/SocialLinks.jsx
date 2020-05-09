import React, { Component } from "react";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    RedditShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    LinkedinIcon,
    RedditIcon,
    EmailShareButton,
    EmailIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import "./SocialLinks.css";

class SocialLinks extends Component {
    render() {
        const { postNode, postPath, mobile, } = this.props;
        const post = postNode.frontmatter;
        const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
        const iconSize = 24 
        const filter = count => (count > 0 ? count : "");
        const renderShareCount = count => (
            <div className="share-count">{filter(count)}</div>
        );
        
        const coverImageCredit = this.props.coverImageCredit;
        const coverImageCreditUrl = 'https://unsplash.com/' + coverImageCredit;

        return (
            <div className="flex xs:flex-col xs:w-full xs:items-center sm:flex-col sm:w-full sm:items-center xs:mt-4 sm:mt-6">
                <div className="flex xs:flex-row xs:justify-between xs:w-full sm:flex-row sm:justify-between sm:w-full">
                   <div className="flex font-body xs:hidden sm:hidden">
                        Share This:
                    </div> 
                    <EmailShareButton subject={post.title} body={url} className="flex">
                        <EmailIcon round size={iconSize} />
                    </EmailShareButton>
                    <FacebookShareButton url={url} quote={postNode.excerpt} className="flex">
                        <FacebookIcon round size={iconSize} />
                    </FacebookShareButton> 
                    <LinkedinShareButton
                        url={url}
                        title={post.title}
                        description={postNode.excerpt}
                        className="flex"
                    >
                        <LinkedinIcon round size={iconSize} />
                    </LinkedinShareButton> 
                    <TelegramShareButton url={url} className="flex">
                        <TelegramIcon round size={iconSize} />
                    </TelegramShareButton> 
                    <TwitterShareButton url={url} title={post.title} className="flex">
                        <TwitterIcon round size={iconSize} />
                    </TwitterShareButton>
                </div>
                <div className="flex font-body xs:text-base xs:flex-row xs:justify-center xs:mt-6 sm:text-lg sm:flex-row sm:justify-center sm:mt-6">
                    <div className="flex">
                        Cover Image By&nbsp;<a href={coverImageCreditUrl} target="_blank">{coverImageCredit}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SocialLinks;
