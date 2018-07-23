// import React from "react";
// import PropTypes from "prop-types";
// import Helmet from "react-helmet";

// import Navbar from "../components/Navbar";

// const TemplateWrapper = ({ children }) => (
//   <div>
//     <Helmet title="Bureau Erkenningen" />
//     <Navbar />
//     <div className="container">{children()}</div>
//     <Footer />
//   </div>
// );

// TemplateWrapper.propTypes = {
//   children: PropTypes.func
// };

// export default TemplateWrapper;
import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import NavBar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Favicon from "./../components/Favicon";

import "./gatstrap.scss";

class Template extends React.Component {
  render() {
    return (
      <div>
        <Favicon />

        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Rubik:700"
            rel="stylesheet"
          />
          <title>Erkenningen</title>
          <meta property="og:title" content="Erkenningen" />
          <meta property="og:description" content="Erkenningen" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://erkenningen.nl" />
          <meta
            property="og:image"
            content="https://erkenningen.nl/social-meta.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://erkenningen.nl/social-meta.png"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Erkenningen" />
          <meta name="twitter:description" content="Erkenningen" />
          <meta
            name="twitter:image"
            content="https://erkenningen.nl.com/social-meta.png"
          />
          <meta name="twitter:creator" content="@aocraad" />
        </Helmet>

        <NavBar children={this.props.children} />

        <div className="container">{this.props.children()}</div>
        <Footer />
      </div>
    );
  }
}
export default Template;
