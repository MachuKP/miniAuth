import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, register } from "../redux/authStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//component
import PageLayout from "../UI/PageLayout";
import Card from "../UI/Card";
import Input from "../components/Input";
import { LoadingSpinner } from "../UI/LoadingSpinner";
//style
import "./Register.scss";

const Register = () => {
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

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

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
      if (password !== confirm) {
        toast.error("Passwords don't match");
      } else {
        const userData = {
          username,
          email,
          password,
        };
        dispatch(register(userData));
      }
    }
  };

  return (
    <PageLayout>
      {isLoading && <LoadingSpinner />}
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
