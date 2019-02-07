import React from 'react';
import Link from 'gatsby-link';

export default class Submenu extends React.Component {
  render() {
    console.log('test', this.props);
    return (
      <div className="single-link">
        <Link to={this.props.link.url}>{this.props.link.name}</Link>
      </div>
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
