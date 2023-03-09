import { useRef, useState, useEffect } from "react";
//component
import PageLayout from "../UI/PageLayout";
import Card from "../UI/Card";
import Input from "../components/Input";
import { LoadingSpinner } from "../UI/LoadingSpinner";
//style
import "./Login.scss";
//redux
import { login, reset } from "../redux/authStore";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [formValidate, setFormValidate] = useState({
    email: null,
    password: null,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch()

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

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

  const { email, password } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    emailInputRef.current.onParentsSubmit();
    passwordInputRef.current.onParentsSubmit();

    console.log(formValidate)
    if (formValidate.email && formValidate.password) {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };

  return (
    <PageLayout>
      {isLoading && <LoadingSpinner />}
      <Card>
        <div className="login-content">
          <div className="title">Login</div>
          <form className="login-form" onSubmit={handleSubmit}>
            <Input
              name={"Email"}
              id="email"
              ref={emailInputRef}
              onChangeValue={onChangeInput}
            />
            <Input
              name={"Password"}
              id="password"
              ref={passwordInputRef}
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

export default Login;
