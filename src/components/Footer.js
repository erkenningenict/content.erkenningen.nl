import React from "react";
import Link from "gatsby-link";

const Footer = () => (
  <div className="container">
    <div className="row">
      <div className="col footer">
        <Link to="/contact" className="footerLink">
          Contact
        </Link>
        |
        <Link to="/faq" className="footerLink">
          FAQ
        </Link>
        |
        <a href="https://erkenningen.nl/" className="footerLink">
          Disclaimer
        </a>
        |
        <a
          href="https://www.erkenningen.nl/Default.aspx?tabid=289"
          className="footerLink"
        >
          Privacyverklaring
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
