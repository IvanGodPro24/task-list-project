import { useId, useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { logIn } from "../../redux/auth/operations";
import { toast } from "sonner";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAppDispatch } from "../../redux/store.types";
import { LoginCredentials } from "../../redux/auth/operations.types";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();

  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (
    { email, password }: LoginCredentials,
    actions: FormikHelpers<LoginCredentials>
  ) => {
    dispatch(
      logIn({
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Login success");
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Login error");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <div className="login">
        <h2 className="active"> log in </h2>
        <Form className="form">
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
            Log in
          </button>

          <p className="m-auto">
            Not a member?{" "}
            <Link to="/register" className="link extra-link">
              Register now
            </Link>
          </p>
        </Form>
      </div>
    </Formik>
  );
};

export default LoginForm;
