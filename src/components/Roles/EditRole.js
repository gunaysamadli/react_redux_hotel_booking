import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getOneRole, roleEdit, setRole } from '../../redux/actions/roleActions';
import validationRole from '../../Validations/validationRole';

const EditRole = () => {

  const role = useSelector((state) => state.allRoles.role);

  const roles = useSelector((state) => state.allRoles.roles);


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
      dispatch(roleEdit(values, id));
      history.push("/roleList");
    }
  };


  const { id } = useParams();

  const fetchUser = async (id) => {
    const response = await axios
      .get(`http://localhost:3000/role/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setRole(response.data));
  };


  useEffect(() => {
    if (id && id !== "") fetchUser(id);
  }, [id]);

  useEffect(() => {
    dispatch(getOneRole(id));
  }, [])

  useEffect(() => {
    if (role) {
      setValues({ ...role })
    }
  }, [role]);

  return (
    <div className="ui grid container">
      <div className="bron-forms">
        <h1>Edit Role</h1>
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
          <button type="submit">Edit Role </button>
        </form>
        <button className="back" onClick={() => history.push("/roleList")}>
          Go back
        </button>
      </div>
    </div>
  )
}

export default EditRole