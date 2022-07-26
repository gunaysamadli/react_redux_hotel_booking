import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  getSingleRole,
  roleUserEdit,
  setUserRole,
} from "../../redux/actions/userActions";
import RoleValidation from "../../Validations/RoleValidation";
import RadioGroup from "@mui/material/RadioGroup";

const EditUser = () => {
  const history = useHistory();

  let dispatch = useDispatch();

  const user = useSelector((state) => state.allUsers.current);

  const users = useSelector((state) => state.allUsers.users);

  const [values, setValues] = useState({
    name: "",
    email: "",
    RoleId: "",
  });

  const roles = useSelector((state) => state.allRoles.roles);


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const isRadioSelected = (value) => values.RoleId === value;

  const radioChange = (e) => {
    setValues({ ...values, RoleId: Number(e.currentTarget.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    let newErrors = RoleValidation(values, users, user);
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      dispatch(roleUserEdit(values, id));
      history.push("/user");
    }
  };

  const { id } = useParams();

  const fetchUser = async (id) => {
    const response = await axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setUserRole(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchUser(id);
  }, [id]);

  useEffect(() => {
    dispatch(getSingleRole(id));
  }, []);

  useEffect(() => {
    if (user) {
      setValues({ ...user });
    }
  }, [user]);

  return (
    <div className="ui grid container">
      <div className="bron-forms">
        <h1>Edit User</h1>
        <form className="bron-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input
              value={values.name}
              onChange={handleChange}
              name="name"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-inputs">
            <input
              value={values.email}
              onChange={handleChange}
              name="email"
              id="email"
              type="text"
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
            {errors.samePassword && (
              <p className="error">{errors.samePassword}</p>
            )}
          </div>
          <div className="form-inputs">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {roles.map((role) => (
                <section key={role.id}>
                  <label>{role.name}</label>
                  <input
                    key={role.id}
                    type="radio"
                    onChange={radioChange}
                    name={role.name}
                    value={role.id}
                    checked={isRadioSelected(role.id)}
                  />
                </section>
              ))}
            </RadioGroup>
          </div>

          <button type="submit">Edit User </button>
        </form>
        <button className="back" onClick={() => history.push("/user")}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default EditUser;
