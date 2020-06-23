import React, { useEffect, useState } from "react";
import { client } from "../utils/axios";

import { Icon, Loader } from "semantic-ui-react";

import styles from "../stylesheets/projects.module.scss";

const dev = process.env.REACT_APP_DEV;

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
	function deleteProject(e) {
		client().delete(`/projects/${e}`);
	}
	return (
		<div className={styles.project}>
			<h1>PROJECTS</h1>
			{projects && projects ? (
				projects.map((data) => (
					<div key={data.id} className={styles.header}>
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

									{dev === "true" ? (
										<button
											className={styles.del_btn}
											onClick={() =>
												deleteProject(data.id)
											}
										>
											Delete
										</button>
									) : (
										""
									)}
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
