import PageLayout from "../UI/PageLayout";
import Card from "../UI/Card";
import { useRef, useState } from "react";
import Input from "../UI/Input";
import "./Register.scss"

const Register = (props) => {
  const [usernameValidate, setUsernameValidate] = useState(null);
  const [emailValidate, setEmailValidate] = useState(null);
  const [passwordValidate, setPasswordValidate] = useState(null);
  const [confirmValidate, setConfirmValidate] = useState(null);

  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmInputRef = useRef();
  
  const checkValidateUsername = (validate) => {
    setUsernameValidate(validate);
  };

  const checkValidateEmail = (validate) => {
    setEmailValidate(validate);
  };

  const checkValidatePassword = (validate) => {
    setPasswordValidate(validate);
  };

  const checkValidateConfirm = (validate) => {
    setConfirmValidate(validate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    usernameInputRef.current.onParentsSubmit();
    emailInputRef.current.onParentsSubmit();
    passwordInputRef.current.onParentsSubmit();
    confirmInputRef.current.onParentsSubmit();

    if (emailValidate && passwordValidate && confirmValidate && usernameValidate) {
      // props.handleLogin()
    }
  };

  return (
    <PageLayout>
      <Card>
        <div className="regist-content">
          <div className="title">Register</div>
          <form className="regist-form" onSubmit={handleSubmit}>
            <Input
              name={"Username"}
              ref={usernameInputRef}
              validateData={checkValidateUsername}
              onChangeValue={checkValidateUsername}
            />
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
            <Input
              name={"ConfirmPassword"}
              ref={confirmInputRef}
              validateData={checkValidateConfirm}
              onChangeValue={checkValidateConfirm}
            />
            <div className="btn-container">
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Card>
    </PageLayout>
  );
};

export default Register;
