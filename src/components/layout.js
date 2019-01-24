import React from "react";
import Helmet from "react-helmet";
import NavBar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Favicon from "./../components/Favicon";

import "./gatstrap.scss";

const Template = ({ children }) => (
  <div>
    <Favicon />

    <Helmet>
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

    <NavBar />

    {children}
    <Footer />
  </div>
);

export default Template;
