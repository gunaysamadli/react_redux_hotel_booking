import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { roleAdded } from "../../redux/actions/roleActions";
import validationRole from "../../Validations/validationRole";

const CreateRole = () => {
  const [values, setValues] = useState({
    name: "",
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
    let newErrors = validationRole(values);
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      dispatch(roleAdded(values));
      history.push("/roleList");
    }
  };

  return (
    <>
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Create Role</h1>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <button>Create  </button>
        </form>
      </div>
    </>
  );
};

export default CreateRole;
