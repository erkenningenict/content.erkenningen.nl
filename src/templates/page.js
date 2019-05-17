import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

import TextPageBody from './../components/TextPageBody';
import Breadcrumb from './../components/Breadcrumb';
import FaqSidebar from '../components/FaqSidebar';
import Layout from '../components/layout';
import LoginLink from '../components/LoginLink';

export const Page = ({ data }) => {
  const page = data.markdownRemark;
  return (
    <Layout>
      <div className="container">
        {page.frontmatter.title && (
          <Helmet>
            <title>Erkenningen | {page.frontmatter.title}</title>
          </Helmet>
        )}

        {page.frontmatter.title && page.frontmatter.excerpt && (
          <Helmet>
            <meta property="og:title" content={page.frontmatter.title} />
            <meta name="twitter:title" content={page.frontmatter.title} />

            <meta property="og:description" content={page.frontmatter.excerpt} />
            <meta name="twitter:description" content={page.frontmatter.excerpt} />
          </Helmet>
        )}

        <div className="row mb-2 mb-lg-5">
          <div className="col-md-1 mt-2 d-none d-lg-block navbar-be__breadcrumbs-spacer-orange" />
          <div className="col-md-2 mt-2 d-none d-lg-block navbar-be__breadcrumbs-spacer-green" />
          <div className="col-md-3 mt-2 d-none d-lg-none d-md-block spacer-green" />
          <div className="col-md-7 mt-2 navbar-be__breadcrumbs-container d-none d-md-block">
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
          <div className="col-md-9 px-sm-0 pl-md-0 mt-2 mt-md-0 pr-lg-5">
            <h1>{page.frontmatter.title}</h1>
            <TextPageBody htmlAst={page.htmlAst} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fileAbsolutePath
      frontmatter {
        title
      }
    }
  }
`;

export default Page;
