import React, { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { client } from "../utils/axios";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [robot, setRobot] = useState();
  const contactMe = (msg) => {
    client()
      .post("/api/email", msg)
      .then((res) => setStatus(res.data.status))
      .catch(() => setStatus(false));
  };
  const onChange = (e) => setRobot(e);
  return (
    <section className="container contact-me mb-4" id="contact-me">
      <div>
        <h1 className="text-center nav-link-active">Lets get in touch!</h1>
        <p className="text-center">
          Email me at 97hernandez.c@gmail.com or fill out the form below.
          Thanks!
        </p>
        <p className="text-center">
          "Alone we can do so little together we can do so much." – Helen Keller
        </p>
      </div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(values) => robot && contactMe(values)}
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
          <div className="d-flex flex-column align-items-center m-1">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              onChange={onChange}
            />
            <button className="btn button" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactMe;
