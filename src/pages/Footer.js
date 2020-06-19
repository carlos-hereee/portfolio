import React from "react";

import { Icon } from "semantic-ui-react";

import styles from "../stylesheets/header_footer.module.scss";

export default function Navigation() {
	return (
		<div className={styles.footer}>
			<a href="https://www.linkedin.com/in/ch04937-carlos-hernandez/">
				<Icon name="linkedin" size="big" />
			</a>
			<a href="https://www.github.com/ch04937">
				<Icon name="github" size="big" />
			</a>
		</div>
	);
}
