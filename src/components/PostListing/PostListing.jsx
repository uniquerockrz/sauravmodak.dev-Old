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
                <div className="max-w-full flex flex-row h-64 my-16 post-min-height">
                    <div className="flex w-1/3 flex-grow-0 flex-shrink-0">
                        <div className="w-full">
                            <Img className="rounded-lg" key={post.url} fluid={data.allUnsplashImagesYaml.edges.find((image) => {
                                return image.node.title.split('_')[1] ===  post.post.cover;
                            }).node.localFile.childImageSharp.fluid }  />
                        </div>
                    </div>
                    <div className="flex w-2/3 flex-col ml-6 justify-between">
                        <div className="flex">
                            <h1 className="font-heading text-4xl">
                                {post.post.title}
                            </h1>
                        </div>
                        <div className="flex">
                            <div className="font-body text-2xl text-gray-700">
                            posted <span className="font-bold">{post.post.date}</span> in <span className="text-primary font-extrabold uppercase">{post.post.category}</span>
                            </div>
                        </div>
                        <div className="flex my-4 excerpt-min-height">
                            <div className="font-body text-2xl text-justify leading-relaxed text-gray-600">
                                {post.post.excerpt}
                            </div>
                        </div>
                        <div className="flex">
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
