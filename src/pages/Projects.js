import React, { useEffect, useState } from "react";
import { client } from "../utils/axios";

import { Icon, Loader } from "semantic-ui-react";

import styles from "../stylesheets/projects.module.scss";

export default function Projects() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		async function getProjects() {
			const get = await client().get("/projects");
			const { projects } = get.data;
			setProjects(projects);
		}
		getProjects();
	}, [projects]);
	// https://deploy-preview-127--labs17-school-calendar.netlify.app/
	function project(e) {
		client().post("/projects", { new_project: e });
	}
	return (
		<div className={styles.project}>
			<h1>PROJECTS</h1>
			{projects && projects ? (
				projects.map((data) => (
					<div
						key={data.id}
						className={styles.header}
						onClick={() => project(data.id)}
					>
						<div className={styles.name}>
							<div className={styles.body}>
								<h3>{data.title}</h3>
								<h5>{data.subtitle}</h5>
								<p>{data.description}</p>
								<div className={styles.btn}>
									<a href={data.website}>View Site</a>
									<a
										href={data.github}
										style={{ color: "black" }}
									>
										<Icon name="github" size="large" />
									</a>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<Loader indeterminate>Loading</Loader>
			)}
		</div>
	);
}
