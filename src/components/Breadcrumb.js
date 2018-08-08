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
          {index > 0 ? <span className="arrow">></span> : null}
          {cleanPaths.length === index + 1 ? (
            <span>{path.replace(/-/g, " ").replace(".md", "")}</span>
          ) : (
            <Link to={fullPath}>
              {path.replace(/-/g, " ").replace(".md", "")}
            </Link>
          )}
        </span>
      );
    });
    return <div className="breadcrumbs px-3 pl-lg-0">{breadCrumbs}</div>;
  }
}

export default Breadcrumb;
