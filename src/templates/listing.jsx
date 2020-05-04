import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import HeroSection from '../components/HeroSection/HeroSection';
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./listing.css";

class Listing extends React.Component {
    renderPaging() {
        const { currentPageNum, pageCount } = this.props.pageContext;
        const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
        const nextPage = `/${currentPageNum + 1}/`;
        const isFirstPage = currentPageNum === 1;
        const isLastPage = currentPageNum === pageCount;

        return (
            <div className="paging-container">
                {!isFirstPage && <Link to={prevPage}>Previous</Link>}
                {[...Array(pageCount)].map((_val, index) => {
                    const pageNum = index + 1;
                    return (
                        <Link
                            key={`listing-page-${pageNum}`}
                            to={pageNum === 1 ? "/" : `/${pageNum}/`}
                        >
                            {pageNum}
                        </Link>
                    );
                })}
                {!isLastPage && <Link to={nextPage}>Next</Link>}
            </div>
        );
    }

    render() {
        const postEdges = this.props.data.allMarkdownRemark.edges;

        return (
            <Layout>
                <React.Fragment>
                    <div className="flex flex-col">
                        <HeroSection />
                        <div className="flex flex-col">
                            <Helmet title={config.siteTitle} />
                            <SEO />
                            <div className="flex font-heading font-bold text-4xl mt-10">
                                Latest Articles
                            </div>
                            <PostListing postEdges={postEdges} />
                        </div>
                        {/* {this.renderPaging()} */}
                    </div>
                </React.Fragment>
            </Layout>
        );
    }
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
    query ListingQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [fields___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    fields {
                        slug
                        date(fromNow: true)
                        postType
                    }
                    timeToRead
                    excerpt
                    frontmatter {
                        category
                        title
                        cover
                        date(fromNow: true)
                    }
                }
            }
        }
    }
`;
