import React, { Component } from "react";
import ReactDisqusComments from "react-disqus-comments";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import "./Disqus.sass";

class Disqus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toasts: []
        };
        this.notifyAboutComment = this.notifyAboutComment.bind(this);
        this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
    }

    onSnackbarDismiss() {
        const [, ...toasts] = this.state.toasts;
        this.setState({ toasts });
    }

    notifyAboutComment() {
        const toasts = this.state.toasts.slice();
        toasts.push({ text: "New comment available!" });
        this.setState({ toasts });
    }

    render() {
        const { postNode } = this.props;
        if (!config.disqusShortname) {
            return null;
        }
        const post = postNode.frontmatter;
        const url = urljoin(
            config.siteUrl,
            config.pathPrefix,
            postNode.fields.postType,
            postNode.fields.slug
        );
        return (
            <div className="flex xs:flex-col xs:w-full sm:flex-col sm:w-full">
                <div className="flex xs:flex-row xs:w-full xs:text-xl font-body italic xs:flex-wrap xs:text-center sm:flex-row sm:w-full sm:text-2xl sm:flex-wrap sm:text-center">
                    We welcome your comments privately via&nbsp;<a href="https://twitter.com/sauravmodakdev" target="_blank" className="text-primary hover:text-primaryLight">Twitter</a>,&nbsp;<a href="https://t.me/sauravmodak" target="_blank" className="text-primary hover:text-primaryLight">Telegram</a>,&nbsp;or&nbsp;<a href="mailto:hi@sauravmodak.dev" className="text-primary hover:text-primaryLight">E-mail</a>.
                </div>
                <ReactDisqusComments
                    shortname={config.disqusShortname}
                    identifier={post.title}
                    title={post.title}
                    url={url}
                    category_id={post.category_id || null}
                    onNewComment={this.notifyAboutComment}
                    className="flex w-full my-6"
                />
            </div>            
        );
    }
}

export default Disqus;
