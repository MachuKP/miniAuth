import PageLayout from "../UI/PageLayout";
import Card from "../UI/Card";
import { useRef, useState } from "react";
import Input from "../components/Input";
import "./Register.scss";

const Register = (props) => {
  const [formValidate, setFormValidate] = useState({
    username: null,
    email: null,
    password: null,
    confirm: null,
  });

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { username, email, password, confirm } = formData;

  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmInputRef = useRef();

  const onChangeInput = (id, value, validate) => {
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setFormValidate((prevState) => ({
      ...prevState,
      [id]: validate,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    usernameInputRef.current.onParentsSubmit();
    emailInputRef.current.onParentsSubmit();
    passwordInputRef.current.onParentsSubmit();
    confirmInputRef.current.onParentsSubmit();

    if (
      formValidate.username &&
      formValidate.email &&
      formValidate.password &&
      formValidate.confirm
    ) {
      console.log(username, email, password, confirm);
    }
  };

  return (
    <PageLayout>
      <Card>
        <div className="regist-content">
          <div className="title">Register</div>
          <form className="regist-form" onSubmit={handleSubmit}>
            <Input
              name="Username"
              id="username"
              ref={usernameInputRef}
              onChangeValue={onChangeInput}
            />
            <Input
              name="Email"
              id="email"
              ref={emailInputRef}
              onChangeValue={onChangeInput}
            />
            <Input
              name="Password"
              id="password"
              ref={passwordInputRef}
              onChangeValue={onChangeInput}
            />
            <Input
              name="Confirm Password"
              id="confirm"
              ref={confirmInputRef}
              onChangeValue={onChangeInput}
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
