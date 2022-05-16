import { useState } from "react";
import Joi from "joi-browser";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import IntroText from "../../components/intro-text/IntroText";
import Input from "../../components/common/Input";
import CreateAccount from "../../components/common/CreateAccount";
import authAction from "../../app/store";
import "./loginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(5).max(12).label("Password"),
  };

  const { email, password } = data;
  const options = { abortEarly: false };

  const validate = () => {
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const errors = validate();
    setErrors(errors || {});
    if (errors) return;
    //call the server and navigate the use to different pages
    sendRequest()
      .then((data) => localStorage.setItem("userId", data.user._id))
      .then(dispatch(authAction.login()))
      .then(() => navigate("/user"));
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const scm = { [name]: schema[name] };
    const { error } = Joi.validate(obj, scm);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const details = { ...data };
    details[input.name] = input.value;
    setData(details, errors);
  };

  return (
    <>
      <motion.div
        className="center-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="welcome-page-container">
          <div className="intro-text-component">
            <IntroText />
          </div>
          <div className="form-container">
            <form className="form-border" onSubmit={handleSubmit}>
              <Input
                name="email"
                value={email}
                error={errors.email}
                onChange={handleChange}
              />
              <Input
                name="password"
                value={password}
                error={errors.password}
                onChange={handleChange}
              />
              <button disabled={validate()} className="btn btn-primary">
                Login
              </button>
              <div
                className="password forget-password"
                onClick={() => navigate("/reset")}
              >
                <a href="#">Forgot Password?</a>
              </div>
              <div className="line-devider"></div>
              <CreateAccount />
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LoginForm;
