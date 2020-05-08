import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image"

import './PostListing.sass'

const Post = (post) => (
    <StaticQuery
        query={graphql`
            query {
                allUnsplashImagesYaml(filter: {title: {regex: "/^cover_/i"}}) {
                    edges {
                        node {
                            id
                            title
                            credit
                            localFile {
                                childImageSharp {
                                    fluid(maxHeight: 160) {
                                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }`
        }
        render = {(data) => {
            return (
                <div className="flex xs:flex-col">
                    <div className="flex xs:mb-4">
                        <div className="w-full">
                            <Link to={post.post.path}>
                                <Img className="rounded-lg" key={post.url} fluid={data.allUnsplashImagesYaml.edges.find((image) => {
                                    return image.node.title.split('_')[1] ===  post.post.cover;
                                }).node.localFile.childImageSharp.fluid }  />
                            </Link>
                        </div>
                    </div>
                    <div className="flex xs:flex-col xs:items-center">
                        <div className="flex">
                            <Link to={post.post.path}>
                                <h1 className="font-heading xs:text-3xl hover:text-primaryLight">
                                    {post.post.title}
                                </h1>
                            </Link>
                        </div>
                        <div className="flex">
                            <div className="font-body xs:text-xl text-gray-700">
                            posted <span className="font-bold">{post.post.date}</span> in <span className="text-primary font-extrabold uppercase">{post.post.category}</span>
                            </div>
                        </div>
                        <div className="flex xs:my-4">
                            <div className="font-body xs:text-2xl text-justify text-gray-600">
                                {post.post.excerpt}
                            </div>
                        </div>
                        <div className="flex xs:mb-6">
                            <div className="text-primaryLight font-bold text-lg uppercase">
                                {post.post.timeToRead} minute read
                            </div>
                        </div>
                    </div>
                </div>
            )  
        }}
    />
);

class PostListing extends React.Component {
    getPostList() {
        const postList = [];
        this.props.postEdges.forEach(postEdge => {
            postList.push({
                path:  '/' + postEdge.node.fields.postType + postEdge.node.fields.slug,
                cover: postEdge.node.frontmatter.cover,
                title: postEdge.node.frontmatter.title,
                date: postEdge.node.fields.date,
                excerpt: postEdge.node.excerpt,
                timeToRead: postEdge.node.timeToRead,
                category: postEdge.node.frontmatter.category
            });
        });
        return postList;
    }

    render() {
        const postList = this.getPostList();
        return (
            <div>
                {/* Your post list here. */
                    postList.map(post => (
                        <Post key={post.title} post={post} />
                    ))}
            </div>
        );
    }
}

export default PostListing;
