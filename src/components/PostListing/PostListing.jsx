import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image"

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
                                    fluid {
                                        ...GatsbyImageSharpFluid_tracedSVG
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
                <div>
                    <h1>Hello</h1>
                    <Img key={post.url} fluid={data.allUnsplashImagesYaml.edges.find((image) => {
                        return image.node.title.split('_')[1] ===  post.post.cover;
                    }).node.localFile.childImageSharp.fluid } />
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
                path: postEdge.node.fields.slug,
                tags: postEdge.node.frontmatter.tags,
                cover: postEdge.node.frontmatter.cover,
                title: postEdge.node.frontmatter.title,
                date: postEdge.node.fields.date,
                excerpt: postEdge.node.excerpt,
                timeToRead: postEdge.node.timeToRead
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
