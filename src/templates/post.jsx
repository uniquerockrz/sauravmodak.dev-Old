import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image"
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
// import "./prism-solarizedlight.css";
import "./post.sass";

export default class PostTemplate extends React.Component {
    render() {
        const { data, pageContext } = this.props;
        const { slug } = pageContext;
        const postNode = data.markdownRemark;
        const post = postNode.frontmatter;
        if (!post.id) {
            post.id = slug;
        }

        const coverImageCredit = data.allUnsplashImagesYaml.edges.find((image) => { return image.node.title.split('_')[1] ===  data.markdownRemark.frontmatter.cover; }).node.credit; 

        return (
            <Layout>
                <div>
                    <Helmet>
                        <title>{`${post.title} | ${config.siteTitle}`}</title>
                    </Helmet>
                    <SEO postPath={slug} postNode={postNode} postSEO />
                    <div className="flex flex-col w-full mt-8">
                        <div className="flex flex-row justify-center mx-4 mb-2">
                            <h1 className="flex font-heading text-5xl font-bold text-gray-700">
                                {post.title}
                            </h1>
                        </div>
                        <div className="flex flex-row justify-center mx-4 mb-4">
                            <p className="flex font-body text-2xl text-gray-600 text-center">
                                {data.markdownRemark.excerpt}
                            </p>
                        </div>
                        <div className="flex flex-row justify-between mx-4 mb-6">
                            <div className="flex font-body text-2xl text-gray-700">
                                Posted&nbsp;<span className="font-bold">{post.date}</span>&nbsp;in&nbsp;<span className="text-primary font-extrabold uppercase">{post.category}</span>
                            </div>
                            <div className="flex text-primaryLight font-bold text-2xl uppercase">
                                {data.markdownRemark.timeToRead} minute read
                            </div>
                        </div>
                        <div className="flex w-full cover-height mb-8">
                            <Img fluid={data.allUnsplashImagesYaml.edges.find((image) => {
                                return image.node.title.split('_')[1] ===  data.markdownRemark.frontmatter.cover;
                            }).node.localFile.childImageSharp.fluid }  />
                        </div>
                        <div className="flex w-full flex-col">
                            <div className="font-reading leading-relaxed tracking-wide" id="markdown-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
                        </div>
                        <div className="flex w-full flex-row">
                            <SocialLinks postPath={data.markdownRemark.fields.postType + slug} postNode={postNode} coverImageCredit={coverImageCredit} />
                        </div>
                        <div className="flex w-full">
                            <UserInfo config={config} />
                        </div>
                        <div className="flex w-full">
                            <Disqus postNode={postNode} />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            timeToRead
            excerpt
            frontmatter {
                title
                cover
                date(fromNow: true)
                category
            }
            fields {
                slug
                date
                postType
            }
        }
        allUnsplashImagesYaml(filter: {title: {regex: "/^cover_/i"}}) {
            edges {
                node {
                    id
                    title
                    credit
                    localFile {
                        childImageSharp {
                            fluid(maxHeight: 400) {
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                    }
                }
            }
        } 
    }
`;
