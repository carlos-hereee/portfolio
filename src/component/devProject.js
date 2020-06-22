import React from "react";

import Projects from "../pages/Projects";

import styles from "../stylesheets/projects.module.scss";

const dev = process.env.REACT_APP_DEV;

export default function Project() {
	return (
		<div className={styles.wrapper}>
			<Projects />
			{dev ? (
				<div>
					<button>AddProject</button>
				</div>
			) : (
				""
			)}
		</div>
	);
}
