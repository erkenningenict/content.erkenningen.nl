import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import TextPageBody from "./../components/TextPageBody";
import Breadcrumb from "./../components/Breadcrumb";
import FaqSidebar from "../components/FaqSidebar";

export default ({ data }) => {
  const page = data.markdownRemark;

  return (
    <div className="container">
      {page.frontmatter.title && (
        <Helmet>
          <title>Erkenningen | {page.frontmatter.title}</title>
        </Helmet>
      )}

      {page.frontmatter.title &&
        page.frontmatter.excerpt && (
          <Helmet>
            <meta property="og:title" content={page.frontmatter.title} />
            <meta name="twitter:title" content={page.frontmatter.title} />

            <meta
              property="og:description"
              content={page.frontmatter.excerpt}
            />
            <meta
              name="twitter:description"
              content={page.frontmatter.excerpt}
            />
          </Helmet>
        )}

      <div className="row mb-5">
        <div className="col-md-1 navbar-be__breadcrumbs-spacer-orange" />
        <div className="col-md-2 navbar-be__breadcrumbs-spacer-green" />
        <div className="col-md-9 navbar-be__breadcrumbs-container">
          <Breadcrumb absolutePath={page.fileAbsolutePath} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 pr-5"><FaqSidebar /></div>
        <div className="col-md-9 pl-0">
          <h1>{page.frontmatter.title}</h1>
          <TextPageBody htmlAst={page.htmlAst} />
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fileAbsolutePath
      frontmatter {
        title
        date
        excerpt
      }
    }
  }
`;
