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
            <div className="flex flex-row h-12 w-full justify-between">
                <div className="flex w-2/5 justify-between">
                   <div className="flex self-center font-body text-lg">
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
                    <RedditShareButton url={url} title={post.title}>
                        <RedditIcon round size={iconSize} />
                    </RedditShareButton>
                    <TelegramShareButton url={url} className="flex">
                        <TelegramIcon round size={iconSize} />
                    </TelegramShareButton> 
                    <TwitterShareButton url={url} title={post.title} className="flex">
                        <TwitterIcon round size={iconSize} />
                    </TwitterShareButton>
                    <WhatsappShareButton title={url}>
                        <WhatsappIcon round size={iconSize}></WhatsappIcon>
                    </WhatsappShareButton>
                </div>
                <div className="flex w-1/5 self-center font-body text-lg flex-row justify-end">
                    <div className="flex">
                        Cover Image By&nbsp;<a href={coverImageCreditUrl} target="_blank">{coverImageCredit}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SocialLinks;
