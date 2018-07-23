import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";

export const LinksPageTemplate = ({
  title,
  path,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              Title: {title}
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LinksPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const LinksPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <LinksPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      path={post.frontmatter.path}
      content={post.html}
    />
  );
};

LinksPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default LinksPage;

export const linksPageQuery = graphql`
  query LinksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;
