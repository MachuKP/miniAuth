import PageLayout from "../UI/PageLayout";
import Card from "../UI/Card";
import { useRef, useState } from "react";
import "./Login.scss";

const isEmtry = (input) => {
  return input?.trim().length > 0;
};

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [emailValidate, setEmailValidate] = useState(true);
  const [passwordValidate, setPasswordValidate] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const validateEmail = isEmtry(emailInputRef.current?.value)
    const validatePassword = isEmtry(emailInputRef.current?.value)

    setEmailValidate(validateEmail)
    setPasswordValidate(validatePassword)

    if (emailValidate && passwordValidate) {
        props.handleLogin()
    }
  };

  const onBlurHandlerEmail = (inputRef) => {
    const validateEmail = isEmtry(inputRef.current?.value)
    setEmailValidate(validateEmail)
  };

  const onBlurHandlerPassword = (inputRef) => {
    const validatePassword = isEmtry(inputRef.current?.value)
    setPasswordValidate(validatePassword)
  };



  return (
    <PageLayout>
      <Card>
        <div className="login-content">
          <div className="title">Login</div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className={`input-container ${emailValidate ? "" : "error"}`}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                ref={emailInputRef}
                onBlur={onBlurHandlerEmail.bind(this, emailInputRef)}
              />
              {emailValidate ? <></> : <span>Please fill your email</span>}
            </div>
            <div className={`input-container ${passwordValidate ? "" : "error"}`}>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                ref={passwordInputRef}
                onBlur={onBlurHandlerPassword.bind(this, passwordInputRef)}
              />
              {passwordValidate ? <></> : <span>Please fill your password</span>}
            </div>
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

export default Login;
