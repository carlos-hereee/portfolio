import React, { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { client } from "../utils/axios";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const schema = yup.object({
  name: yup.string().required("*This field is required"),
  message: yup.string().required("*This field is required"),
  email: yup
    .string()
    .email("*Must be a valid email")
    .required("*This field is required"),
});

const ContactMe = () => {
  const [status, setStatus] = useState(false);
  const contactMe = (msg) => {
    client()
      .post("/api/email", msg)
      .then((res) => setStatus(res.data.status))
      .catch(() => setStatus(false));
  };
  return (
    <section className="contact-me">
      <h1>How to contact me?</h1>
      <p>
        Email me at 97hernandez.c@gmail.com or fill out the form below. Thanks!
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          contactMe(values);
          actions.resetForm();
        }}
        validationSchema={schema}>
        <Form className="contact-me__form">
          <div className="contact-me__label">
            <label>Name</label>
            <ErrorMessage name="name" component="div" className="validate" />
          </div>
          <Field type="text" name="name" />
          <div className="contact-me__label">
            <label>Email</label>
            <ErrorMessage name="email" component="div" className="validate" />
          </div>
          <Field type="email" name="email" />
          <div className="contact-me__label">
            <label>Message</label>
            <ErrorMessage name="message" component="div" className="validate" />
          </div>
          <Field
            type="text"
            name="message"
            component="textarea"
            className="textarea"
          />
          {status && (
            <div className="success">
              <FontAwesomeIcon icon={faCheckCircle} color="green" />
              <p className="success__message">
                Email has been sent. Will be in touch soon!
              </p>
            </div>
          )}
          <div className="contact-me__button">
            <button className="button button--primary" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactMe;
