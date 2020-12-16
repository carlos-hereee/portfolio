import React from "react";
import { Icon } from "semantic-ui-react";

const Footer = () => (
  <footer>
    <div className="footer">
      <div>
        <p>Copyright © 2020</p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/ch04937-carlos-hernandez/"
          className="footer__link">
          <Icon name="linkedin" size="big" />
        </a>
        <a href="https://www.github.com/ch04937" className="footer__link">
          <Icon name="github" size="big" />
        </a>
        <a href="https://twitter.com/ch04937" className="footer__link">
          <Icon name="twitter" size="big" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
