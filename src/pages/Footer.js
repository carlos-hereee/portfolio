import React from "react";
import Social from "../components/Social";
import ch04937 from "../assets/ch04937.svg";

const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <img src={ch04937} alt="ch04937 logo" />
      <p>Copyright © 2020</p>
    </div>
    <Social />
  </footer>
);

export default Footer;
