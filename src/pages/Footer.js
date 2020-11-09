import React from "react";
import { Icon } from "semantic-ui-react";
import styles from "../stylesheets/header_footer.module.scss";

export default function Navigation() {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/ch04937-carlos-hernandez/"
        className={styles.link}>
        <Icon name="linkedin" size="big" />
      </a>
      <a href="https://www.github.com/ch04937" className={styles.link}>
        <Icon name="github" size="big" />
      </a>
      <a href="https://twitter.com/ch04937" className={styles.link}>
        <Icon name="twitter" size="big" />
      </a>
    </div>
  );
}
