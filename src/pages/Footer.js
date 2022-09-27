import React from "react";
import Logo from "../components/Logo";
import Social from "../components/Social";

const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <div className="footer-logo">
        <Logo />
      </div>
      <p>Copyright © {new Date().getFullYear}</p>
    </div>
    <Social />
  </footer>
);

export default Footer;
