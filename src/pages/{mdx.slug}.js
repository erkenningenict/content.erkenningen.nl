import React from 'react';
// import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import Breadcrumb from './../components/Breadcrumb';
import FaqSidebar from '../components/FaqSidebar';
import Layout from '../components/layout';
import LoginLink from '../components/LoginLink';

const Page = ({ data }) => {
  const page = data.mdx;
  return (
    <Layout>
      <div className="container">
        {/* {page.frontmatter.title && (
          <Helmet>
            <title>Erkenningen | {page.frontmatter.title}</title>
          </Helmet>
        )} */}

        {/* {page.frontmatter.title && page.frontmatter.excerpt && (
          <Helmet>
            <meta property="og:title" content={page.frontmatter.title} />
            <meta name="twitter:title" content={page.frontmatter.title} />

            <meta property="og:description" content={page.frontmatter.excerpt} />
            <meta name="twitter:description" content={page.frontmatter.excerpt} />
          </Helmet>
        )} */}

        <div className="row mb-2 mb-lg-5">
          <div className="col-md-1 mt-2 d-none d-lg-block navbar-be__breadcrumbs-spacer-orange" />
          <div className="col-md-2 mt-2 d-none d-lg-block navbar-be__breadcrumbs-spacer-green" />
          <div className="col-md-10 col-lg-7 mt-2 navbar-be__breadcrumbs-container d-none d-md-block">
            <Breadcrumb absolutePath={page.fileAbsolutePath} />
          </div>
          <div className="col-md-2 mt-2 spacer-green text-right navbar-be__breadcrumbs-menu">
            <LoginLink />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 pl-0 pr-0 pl-lg-3 pr-md-3 pr-lg-5">
            <FaqSidebar />
          </div>
          <div className="col-md-9 px-sm-0 pl-md-0 mt-2 mt-md-0">
            <h1>{page.frontmatter.title}</h1>
            <MDXRenderer frontmatter={page.frontmatter}>{page.body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
      fileAbsolutePath
    }
  }
`;

export default Page;
