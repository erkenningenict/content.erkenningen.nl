import React from "react";
import Link from "gatsby-link";

export default class LinkContainer extends React.Component {
  render() {
    console.log("link container", this.props);
    return (
      <div className="link-container">{this.props.children}</div>
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
