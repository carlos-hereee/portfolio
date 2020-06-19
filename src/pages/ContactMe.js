import React from "react";
import { Form, Field, Formik } from "formik";

import styles from "../stylesheets/form.module.scss";

function validateEmail(value) {
	let error;
	if (!value) {
		error = "*Email is a Required Field";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		error = "*Invalid email address";
	}
	return error;
}

function contactMe(msg) {
	console.log("msg", msg);
}

function ContactMe() {
	return (
		<>
			<div style={{ textAlign: "center" }}>
				<h1>Contact</h1>
				<p>
					Email me at 97hernandez.c@gmail.com or fill out the form
					below. Thanks!
				</p>
			</div>
			<div className={styles.wrapper}>
				<Formik
					initialValues={{
						name: "",
						email: "",
						subject: "",
						message: "",
					}}
					onSubmit={(values, actions) => {
						contactMe(values);
					}}
				>
					{({ errors, touched, validateForm }) => (
						<Form className={styles.form}>
							<label>Name</label>
							<Field type="text" name="name" />
							<label>Email</label>
							<Field
								type="email"
								name="email"
								validate={validateEmail}
							/>
							{errors.email && touched.email && (
								<div className={styles.validate}>
									{errors.email}
								</div>
							)}
							<label>Subject</label>
							<Field type="text" name="subject" />
							<label>Message</label>
							<Field type="text" name="message" />
							<button type="submit" onClick={() => validateForm}>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
}

export default ContactMe;
