import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";

export const ContentPageTemplate = ({
  title,
  path,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

ContentPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ContentPage = ({ data }) => {
  console.log("Data", data);
  const { markdownRemark: post } = data;

  return (
    <ContentPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      path={post.frontmatter.path}
      content={post.html}
    />
  );
};

ContentPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContentPage;

export const contentPageQuery = graphql`
  query ContentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
        templateKey
      }
    }
  }
`;
