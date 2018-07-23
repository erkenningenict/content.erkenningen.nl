import React from "react";
import Link from "gatsby-link";

export default class LinkButton extends React.Component {
  render() {
    return (
      <Link className="link-button" to={this.props.link.url}>
        {this.props.link.name}

        <svg
          className="link-button__line"
          width="50"
          height="5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect
              fill="#fff"
              id="canvas_background"
              height="5"
              width="52"
              y="-1"
              x="-1"
            />
          </g>
        </svg>
      </Link>
      // <ul className="nav__submenu">
      //   <li className="nav__submenu-item ">
      //     <a>Our Company</a>
      //   </li>
      //   <li className="nav__submenu-item ">
      //     <a>Our Team</a>
      //   </li>
      //   <li className="nav__submenu-item ">
      //     <a>Our Portfolio</a>
      //   </li>
      // </ul>
    );
  }
}
