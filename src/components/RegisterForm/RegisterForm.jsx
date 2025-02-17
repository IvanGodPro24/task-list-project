import { useId, useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "sonner";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, actions) => {
    dispatch(register({ name, email, password }));

    toast.success("Register success");

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      <div className="login">
        <h2 className="active"> register </h2>
        <Form className="form">
          <label htmlFor={nameId} className="login-label">
            Username
          </label>
          <Field type="text" name="name" id={nameId} className="text" />
          <ErrorMessage name="name" component="span" className="error" />

          <label htmlFor={emailId} className="login-label">
            Email
          </label>
          <Field type="email" name="email" id={emailId} className="text" />
          <ErrorMessage name="email" component="span" className="error" />

          <label htmlFor={passwordId} className="login-label">
            Password
          </label>
          <div className="password-container">
            <Field
              type={isVisible ? "text" : "password"}
              name="password"
              id={passwordId}
              className="text"
            />

            <span
              className="visible"
              onClick={() => setIsVisible((prev) => !prev)}
            >
              {isVisible ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </div>

          <ErrorMessage name="password" component="span" className="error" />

          <button type="submit" className="auth-btn">
            Register
          </button>

          <p className="m-auto">
            Already have an account?{" "}
            <Link to="/login" className="link extra-link">
              Log in
            </Link>
          </p>
        </Form>
      </div>
    </Formik>
  );
};

export default RegisterForm;
