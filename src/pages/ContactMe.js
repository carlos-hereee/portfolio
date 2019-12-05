import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

import "./contact.scss";

function ContactMe({ touched, errors }) {
	return (
		<div className="contact-container">
			<h1 className="title">Contact</h1>
			<p>Have a question or want to work together?</p>
			<Form className="form-container">
				<div className="field">
					<p>Name: </p>
					<Field type="name" name="name" />
				</div>
				<div className="field">
					<p>Email: </p>
					<Field type="email" name="email" />
				</div>
				<div className="field-message">
					<p>Message: </p>
					<Field type="text" name="message" />
				</div>
				<button className="create-goal-button" type="submit">
					Submit
				</button>
			</Form>
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
