import React, { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { client } from "../utils/axios";
import { Message } from "semantic-ui-react";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("*This field is required"),
  message: yup.string().required("*This field is required"),
  email: yup
    .string()
    .email("*Must be a valid email")
    .required("*This field is required"),
});

const ContactMe = () => {
  const [message, setMessage] = useState(null);
  const contactMe = (msg) => {
    client()
      .post("/api/email", msg)
      .then((res) => setMessage(res.data.success));
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
          {message && <Message success content={message} />}
          <button className="button button--primary" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactMe;
