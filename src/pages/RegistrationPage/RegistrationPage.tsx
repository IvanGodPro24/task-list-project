import RegisterForm from "../../components/RegisterForm/RegisterForm";
import DocumentTitle from "../../DocumentTitle";

const RegistrationPage = () => {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>

      <h1 className="mt font-sans font-bold">Join Us!</h1>
      <RegisterForm/>
    </>
  );
};

export default RegistrationPage;
