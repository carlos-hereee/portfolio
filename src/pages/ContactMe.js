import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import "./pages.scss";

function ContactMe() {
	return (
		<div className="contact-container">
			<div className="header">
				<h1 className="title">Contact</h1>
				<p>
					Email me at 97hernandez.c@gmail.com or fill out the form below.
					Thanks!
				</p>
			</div>
			<div className="form">
				<Form>
					<div className="field">
						<p>Name * </p>
						<Field type="name" name="name" />
					</div>
					<div className="field">
						<p>Email * </p>
						<Field type="email" name="email" />
					</div>
					<div className="field">
						<p>Subject </p>
						<Field type="text" name="subject" />
					</div>
					<div className="field-message">
						<p>Message * </p>
						<Field type="text" name="message" />
					</div>
					<div className="btn">
						<button className="submit" type="submit">
							Submit
						</button>
					</div>
				</Form>
			</div>
		</div>
	);
}
const FormikContact = withFormik({
	mapPropsToValues({ name, email, message }) {
		return {
			name: name || "",
			email: email || "",
			message: message || "",
		};
	},
	validationSchema: Yup.object().shape({
		name: Yup.string().required("Name is a required field"),
		email: Yup.string().required("Email is a required field"),
		message: Yup.string().required("Message is a required field"),
	}),
})(ContactMe);

export default FormikContact;
