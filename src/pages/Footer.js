import React from "react";
import { Icon } from "semantic-ui-react";

const Navigation = () => (
  <footer className="footer">
    <a
      href="https://www.linkedin.com/in/ch04937-carlos-hernandez/"
      className="link">
      <Icon name="linkedin" size="big" />
    </a>
    <a href="https://www.github.com/ch04937" className="link">
      <Icon name="github" size="big" />
    </a>
    <a href="https://twitter.com/ch04937" className="link">
      <Icon name="twitter" size="big" />
    </a>
  </footer>
);

export default Navigation;
