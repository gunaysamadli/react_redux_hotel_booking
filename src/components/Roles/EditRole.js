import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getSingleRole, roleEdit, setRole, setUser } from '../../redux/actions/userActions';
import RoleValidation from '../../Validations/RoleValidation';

const EditRole = () => {

  const user = useSelector((state) => state.allUsers.current);

  const users = useSelector((state) => state.allUsers.users);


  const [values, setValues] = useState({
    name: "",
    email: "",
    role: ""
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
    let newErrors = RoleValidation(values,users,user);
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      dispatch(roleEdit(values, id));
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
    dispatch(setRole(response.data));
  };


  useEffect(() => {
    if (id && id !== "") fetchUser(id);
  }, [id]);

  useEffect(() => {
    dispatch(getSingleRole(id));
  }, [])

  useEffect(() => {
    if (user) {
      setValues({ ...user })
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
            {errors.samePassword && <p className="error">{errors.samePassword}</p>}
          </div>
          <div className="form-inputs">
            <input
              value={values.role}
              onChange={handleChange}
              name="role"
              id="role"
              type="text"
              placeholder="Enter your role"
            />
            {errors.email && <p className="error">{errors.email}</p>}
            
          </div>
          <button type="submit">Edit User </button>
        </form>
        <button className="back" onClick={() => history.push("/user")}>
          Go back
        </button>
      </div>
    </div>
  )
}

export default EditRole