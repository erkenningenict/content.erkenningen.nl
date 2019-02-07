import React from 'react';
import Link from 'gatsby-link';

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
          href="https://www.erkenningen.nl/Default.aspx?tabid=154&ctl=Terms"
          className="footerLink"
        >
          Disclaimer
        </a>
        <div className="d-none d-sm-block">|</div>
        <a href="https://www.erkenningen.nl/Default.aspx?tabid=289" className="footerLink">
          Privacyverklaring
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
