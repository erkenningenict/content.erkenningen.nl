import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const StyledArrow = styled.span`
  font-size: 1rem;
  color: #fff;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  margin-right: 10px;
  &:hover {
    color: #eee;
    text-decoration: underline;
  }
`;

const StyledBreadcrumbsContainer = styled.div`
  padding: 0.5rem 1rem;
`;

class Breadcrumb extends React.Component {
  render() {
    const { absolutePath } = this.props;
    const paths = absolutePath
      .substr(absolutePath.indexOf("pages/"), absolutePath.length)
      .replace("pages/", "")
      .replace("index.md", "")
      .replace(/.md/, "")
      .split("/");

    const breadCrumbs = paths.map((path, index) => {
      return (
        <span>
          {index > 0 ? <StyledArrow>></StyledArrow> : null}
          <StyledLink to={path}>
            {path.replace(/-/g, " ").replace(".md", "")}
          </StyledLink>
        </span>
      );
    });

    return (
      <StyledBreadcrumbsContainer>{breadCrumbs}</StyledBreadcrumbsContainer>
    );
  }
}

export default Breadcrumb;
