import React from 'react';
import Link from 'gatsby-link';

export default class LinkButton extends React.Component {
  getSvgLine() {
    return (
      <svg className="link-button__line" width="50" height="5" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect fill="#fff" id="canvas_background" height="5" width="52" y="-1" x="-1" />
        </g>
      </svg>
    );
  }
  render() {
    const { url, name } = JSON.parse(this.props.link);
    const parsedName = name.replace('%27', "'");
    if (url.indexOf('http') > -1) {
      return (
        <a
          className="link-button"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={parsedName}
        >
          {parsedName}
          {this.getSvgLine()}
        </a>
      );
    } else {
      return (
        <Link className="link-button" to={url}>
          {parsedName}
          {this.getSvgLine()}
        </Link>
      );
    }
  }
}
