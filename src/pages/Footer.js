import React from "react";
import Logo from "../components/Logo";
import Social from "../components/Social";

const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <Logo size="small" />
      <p>Copyright © 2020</p>
    </div>
    <Social />
  </footer>
);

export default Footer;
