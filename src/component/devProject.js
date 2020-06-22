import React from "react";
import { Form, Field, Formik } from "formik";

import Projects from "../pages/Projects";

import { client } from "../utils/axios";
import { required } from "../utils/validate";

import styles from "../stylesheets/projects.module.scss";
import form from "../stylesheets/form.module.scss";

const dev = process.env.REACT_APP_DEV;

export default function Project() {
	function addProject(e) {
		client().post("/projects", { e });
	}
	return (
		<div className={styles.wrapper}>
			<Projects />
			{dev ? (
				<div>
					<Formik
						initialValues={{
							title: "",
							subtitle: "",
							description: "",
							gitHub: "",
							website: "",
						}}
						onSubmit={(values, actions) => {
							addProject(values);
							actions.resetForm();
						}}
					>
						{({ errors, touched, validateForm }) => (
							<Form className={form.form}>
								<label>Title</label>
								{errors.title && touched.title && (
									<div className={form.validate}>
										{errors.title}
									</div>
								)}
								<Field
									type="text"
									name="title"
									validate={required}
								/>
								<label>Subtitle</label>
								{errors.subtitle && touched.subtitle && (
									<div className={form.validate}>
										{errors.subtitle}
									</div>
								)}
								<Field
									type="text"
									name="subtitle"
									validate={required}
								/>
								<label>Website</label>
								{errors.website && touched.website && (
									<div className={form.validate}>
										{errors.website}
									</div>
								)}
								<Field
									type="text"
									name="website"
									validate={required}
								/>
								<label>GitHub</label>
								{errors.gitHub && touched.gitHub && (
									<div className={form.validate}>
										{errors.gitHub}
									</div>
								)}
								<Field
									type="text"
									name="gitHub"
									validate={required}
								/>
								<label>Description</label>
								{errors.description && touched.description && (
									<div className={form.validate}>
										{errors.description}
									</div>
								)}
								<Field
									type="text"
									name="description"
									validate={required}
								/>
								<button
									type="submit"
									onClick={() => validateForm}
								>
									AddProject
								</button>
							</Form>
						)}
					</Formik>
				</div>
			) : (
				""
			)}
		</div>
	);
}
