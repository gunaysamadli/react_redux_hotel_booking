
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [flag, setFlag] = useState(false);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    let pass = localStorage
      .getItem("password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("email").replace(/"/g, "");
    

    if (!values.email || !values.password) {
      setFlag(true);
    } else if (values.password !== pass || values.email !== mail) {
      setFlag(true);
    } else {
      setFlag(false);
      history.push("/");
    }
   
  };

  return (
    <div className="login">
       <form onSubmit={handleSubmit} className="login-form">
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your Email"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your Password"
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <div color="primary" variant="warning">
              Fill correct Info else keep trying.
            </div>
          )}
        </form>
    </div>
  );
};

export default Login;
