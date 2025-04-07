import LoginForm from "../../components/LoginForm/LoginForm";
import DocumentTitle from "../../DocumentTitle";

const LoginPage = () => {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>

      <h1 className="mt font-sans font-bold">Hello again!</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;
