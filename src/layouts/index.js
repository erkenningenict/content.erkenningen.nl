import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./gatstrap.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Bureau Erkenningen" />
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
