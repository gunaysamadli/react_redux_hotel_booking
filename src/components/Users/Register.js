import { useSelect } from "@mui/base";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUsers, setUsers, userAdded } from "../../redux/actions/userActions";
import UserValidation from "../../Validations/UserValidation";
import Login from "./Login";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const history = useHistory();

  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    let newErrors = UserValidation(values, users);
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      dispatch(userAdded(values));

      localStorage.setItem("email", JSON.stringify(values.email));
      localStorage.setItem("password", JSON.stringify(values.password));

      history.push("/");
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.allUsers.users);

  return (
    <>
      <div className="login">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1>Register Here</h1>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            {errors.samePassword && (
              <p className="error">{errors.samePassword}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <button>Register </button>
          </form>
        </div>
    </>
  );
};

export default Register;
