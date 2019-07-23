import 'whatwg-fetch';

import React from 'react';
import Helmet from 'react-helmet';

import Navigation from './Navigation';
import Footer from './Footer';
import Favicon from './Favicon';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';

import './gatstrap.scss';
import './styles.scss';

const Template = ({ children }) => (
  <div>
    <Favicon />

    <Helmet>
      <title>Erkenningen</title>
      <html lang="nl-NL" />
      <meta property="og:title" content="Bureau Erkenningen" />
      <meta
        property="og:description"
        content="Bureau Erkenningen, licenties voor groene en agrarische beroepen. Voor het gebruik van professionele chemische middelen bij gewasbescherming en het bestrijden van knaagdieren, mollen en woelratten."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://erkenningen.nl" />
      <meta property="og:image" content="https://erkenningen.nl/social-meta.png" />
      <meta property="og:image:secure_url" content="https://erkenningen.nl/social-meta.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Bureau Erkenningen" />
      <meta
        name="twitter:description"
        content="Bureau Erkenningen, licenties voor groene en agrarische beroepen. Voor het gebruik van professionele chemische middelen bij gewasbescherming en het bestrijden van knaagdieren, mollen en woelratten."
      />
      <meta name="twitter:image" content="https://erkenningen.nl.com/social-meta.png" />
      <meta name="twitter:creator" content="@bureauerkenningen" />
    </Helmet>

    <Navigation />

    {children}

    <Footer />
  </div>
);

export default Template;
