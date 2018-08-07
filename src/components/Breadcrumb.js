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
    color: #fff;
    text-decoration: underline;
  }
`;

const StyledSpan = styled.span`
  color: #fff;
  font-size: 1.5rem;
`;

const StyledBreadcrumbsContainer = styled.div`
  // padding: 0.5rem 1rem;
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
    const cleanPaths = paths.filter(path => path !== "");
    let fullPath = "";
    const breadCrumbs = cleanPaths.map((path, index) => {
      fullPath = `${fullPath}/${path}`;
      return (
        <span key={index}>
          {index > 0 ? <StyledArrow>></StyledArrow> : null}
          {cleanPaths.length === index + 1 ? (
            <StyledSpan>
              {path.replace(/-/g, " ").replace(".md", "")}
            </StyledSpan>
          ) : (
            <StyledLink to={fullPath}>
              {path.replace(/-/g, " ").replace(".md", "")}
            </StyledLink>
          )}
        </span>
      );
    });
    return (
      <StyledBreadcrumbsContainer>{breadCrumbs}</StyledBreadcrumbsContainer>
    );
  }
}

export default Breadcrumb;
