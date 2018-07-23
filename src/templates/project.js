import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import TextPageBody from "./../components/TextPageBody";
import ProjectLinks from "./../components/ProjectLinks";

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      {post.frontmatter.title && (
        <Helmet>
          <title>Erkenningen | {post.frontmatter.title}</title>
        </Helmet>
      )}
      <h1>{post.frontmatter.title}</h1>
      <ProjectLinks
        link={post.frontmatter.link}
        repo={post.frontmatter.repo}
        date={post.frontmatter.date}
        lang={post.frontmatter.lang}
      />
      <TextPageBody htmlAst={post.htmlAst} />
    </div>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        link
        repo
        date
        lang
      }
    }
  }
`;
