import React from 'react';
import { Link } from 'gatsby';
import CookieConsent from 'react-cookie-consent';

const Footer = () => (
  <div className="container">
    <div className="row">
      <div className="col footer d-flex flex-wrap my-2  d-flex justify-content-around justify-content-md-center">
        <Link to="/contact" className="footerLink">
          Contact
        </Link>
        <div className="d-none d-sm-block">|</div>
        <Link to="/faq" className="footerLink">
          FAQ
        </Link>
        <div className="d-none d-sm-block">|</div>
        <a
          href="https://administratie.erkenningen.nl/Default.aspx?tabid=154&ctl=Terms"
          className="footerLink"
        >
          Disclaimer
        </a>
        <div className="d-none d-sm-block">|</div>
        <a
          href="https://administratie.erkenningen.nl/Default.aspx?tabid=289"
          className="footerLink"
        >
          Privacyverklaring
        </a>
        <div className="d-none d-sm-block">|</div>
        <a
          href="https://administratie.erkenningen.nl/Portals/1/20200408 Gedragscode gebruik  ICT Bedrijfsmiddelen BE Versie 2020APR.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="footerLink"
        >
          Gedragscode gebruik ICT Bedrijfsmiddelen
        </a>
      </div>
    </div>
    <CookieConsent location="none" buttonText="Begrepen" disableStyles={true}>
      Bureau Erkenningen gebruikt cookies en vergelijkbare technieken om de website goed te kunnen
      laten werken en om te analyseren hoe de website wordt gebruikt.
    </CookieConsent>
  </div>
);

export default Footer;
