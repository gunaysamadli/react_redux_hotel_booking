
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, userEdit } from "../../redux/actions/userActions";
import { v4 as uuid } from 'uuid';

const Login = () => {


  const [values, setValues] = useState({
    email: "",
    password: "",
    token: uuid()
  });

  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch()

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.allUsers.users);

  let isUser = users.filter((user) => user.email === values.email && user.password === values.password);

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isUser && isUser.length) {
      dispatch(userEdit(values, isUser.map((user) => (user.id))))
      localStorage.setItem("token", JSON.stringify(values.token));
      setFlag(false);
      history.push("/");

    } else {
      setFlag(true);
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
