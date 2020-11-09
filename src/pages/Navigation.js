import React from "react";
import { Link } from "react-router-dom";

import styles from "../stylesheets/header_footer.module.scss";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/projects" className={styles.link}>
        Projects
      </Link>
      <Link to="/contact-me" className={styles.link}>
        Contact
      </Link>
    </div>
  );
}
