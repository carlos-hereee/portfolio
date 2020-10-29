import React from "react";
import { Link } from "react-router-dom";

import styles from "../stylesheets/header_footer.module.scss";

export default function Nav() {
	return (
		<div className={styles.nav}>
			<Link to="/">Home</Link>
			<Link to="/projects">Projects</Link>
			<Link to="/contact-me">Contact</Link>
		</div>
	);
}
