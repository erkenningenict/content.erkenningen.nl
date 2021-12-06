import GatsbyLink from 'gatsby-link';
import React from 'react';

import './LinkButton.scss';

// const LinkButton: React.FC<{
//   to: string;
//   mode?: string;
// }> = (props) => {

const LinkButton = (props) => {
  const svgLine = (
    <svg className="line" width="50" height="5" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#fff" height="5" width="52" y="-1" x="-1" />
      </g>
    </svg>
  );

  if (props.to && props.to.indexOf('http') > -1) {
    return (
      <a
        className="LinkButton"
        href={props.to}
        target="_blank"
        rel="noopener noreferrer"
        title={props.children ? props.children.toString() : ''}>
        {props.children}
        {svgLine}
      </a>
    );
  }

  return (
    <GatsbyLink to={props.to} className="LinkButton">
      {props.children}
      {svgLine}
    </GatsbyLink>
  );
};

export default LinkButton;
