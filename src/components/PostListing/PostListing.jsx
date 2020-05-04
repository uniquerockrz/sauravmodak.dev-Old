import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image"

const Post = (post) => (
    <StaticQuery
        query={graphql`
            query {
                DataScienceImage: unsplashImagesYaml(title: {eq: "DataScience"}){
                    credit
                    title
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 20, quality: 100) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                }
            }`
        }
        render = {(data) => {
            console.log(post);
            console.log(data);
            return (
                <div>
                    <h1>Hello</h1>
                    <Img fluid={data.DataScienceImage.localFile.childImageSharp.fluid} key={post.path} />
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
