import Link from "gatsby-link";
import React from "react";

const NavigationItem = ({ depth, href, title, excerpt }) => (
  <dd className={`depth-${depth}`}>
    <Link className="searchResultNavigationItem" to={href}>
      <h4>{title}</h4>
      <p>{excerpt}</p>
    </Link>
  </dd>
);

NavigationItem.defaultProps = {
  depth: 0
};

export default NavigationItem;
