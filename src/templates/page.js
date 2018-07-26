import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import TextPageBody from "./../components/TextPageBody";
import Breadcrumb from "./../components/Breadcrumb";

export default ({ data }) => {
  const page = data.markdownRemark;

  return (
    <div>
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

      <div className="navbar navbar-expand-lg navbar-be__breadcrumbs-container">
        <div className="navbar-be__breadcrumbs-spacer">
          {" ".replace(/ /g, "\u00a0")}
        </div>
        <Breadcrumb absolutePath={page.fileAbsolutePath} />
      </div>
      <div className="row">
            <div className="col-md-3">
Search
            </div>
            <div className="col-md-9">
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
