import React, { useState } from "react";
import { Form, Field, Formik } from "formik";
import { client } from "../utils/axios";
import {
  validateSubject,
  validateMessage,
  validateEmail,
  validateName,
} from "../utils/validate";
import styles from "../stylesheets/form.module.scss";
import { Message } from "semantic-ui-react";

function ContactMe() {
  const [message, setMessage] = useState("");
  function contactMe(msg) {
    client()
      .post("/mail", msg)
      .then((res) => setMessage(res.data.message));
  }
  return (
    <div className={styles.contactMe}>
      <h1>How to contact me?</h1>
      <p>
        Email me at 97hernandez.c@gmail.com or fill out the form below. Thanks!
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          contactMe(values);
          actions.resetForm();
        }}>
        {({ errors, touched, validateForm }) => (
          <Form className={styles.form}>
            <label>Name</label>
            {errors.name && touched.name && (
              <div className={styles.validate}>{errors.name}</div>
            )}
            <Field type="text" name="name" validate={validateName} />
            <label>Email</label>
            {errors.email && touched.email && (
              <div className={styles.validate}>{errors.email}</div>
            )}
            <Field type="email" name="email" validate={validateEmail} />
            <label>Subject</label>
            {errors.subject && touched.subject && (
              <div className={styles.validate}>{errors.subject}</div>
            )}
            <Field type="text" name="subject" validate={validateSubject} />
            <label>Message</label>
            {errors.message && touched.message && (
              <div className={styles.validate}>{errors.message}</div>
            )}
            <Field
              type="text"
              name="message"
              component="textarea"
              validate={validateMessage}
            />
            {message && <Message success content={message} />}
            <button
              className={styles.btn}
              type="submit"
              onClick={() => validateForm}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactMe;
