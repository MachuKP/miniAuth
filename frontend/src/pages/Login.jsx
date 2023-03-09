import { useRef, useState } from "react";
//component
import PageLayout from "../UI/PageLayout";
import Card from "../UI/Card";
import Input from "../components/Input";
//style
import "./Login.scss";

const Login = (props) => {
  const [emailValidate, setEmailValidate] = useState(null);
  const [passwordValidate, setPasswordValidate] = useState(null);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const checkValidateEmail = (validate) => {
    setEmailValidate(validate);
  };

  const checkValidatePassword = (validate) => {
    setPasswordValidate(validate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailInputRef.current.onParentsSubmit();
    passwordInputRef.current.onParentsSubmit();

    if (emailValidate && passwordValidate) {
      props.handleLogin()
    }
  };

  return (
    <PageLayout>
      <Card>
        <div className="login-content">
          <div className="title">Login</div>
          <form className="login-form" onSubmit={handleSubmit}>
            <Input
              name={"Email"}
              ref={emailInputRef}
              validateData={checkValidateEmail}
              onChangeValue={checkValidateEmail}
            />
            <Input
              name={"Password"}
              ref={passwordInputRef}
              validateData={checkValidatePassword}
              onChangeValue={checkValidatePassword}
            />
            <div className="btn-container">
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </div>
          </form>
          {/* <div>
            <div>{count}</div>
          </div> */}
        </div>
      </Card>
    </PageLayout>
  );
};

export default Login;
