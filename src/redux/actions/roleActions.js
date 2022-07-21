
import axios from "axios";
import { ActionTypes } from "../contants/actionTypes";


export const setRoles = (roles) => {
  return {
    type: ActionTypes.SET_ROLES,
    payload: roles,
  };
};

export const setRole = (role) => {
  return {
    type: ActionTypes.SET_ROLE,
    payload: role,
  };
};

export const editRole = () => {
  return {
    type: ActionTypes.EDIT_ROLE,
  };
};

export const addRole = () => {
    return {
      type: ActionTypes.ADD_ROLE,
    };
  };


  export const deleteSelectedRole = () => {
    return {
      type: ActionTypes.DELETE_ROLE,
    };
  };


export const getRoles = () => {
  return async function (dispatch) {
    await axios
      .get(`http://localhost:3000/role`)
      .then((res) => {
        dispatch(setRoles(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const roleAdded = (role) => {
    return function (dispatch) {
      axios
        .post(`http://localhost:3000/role`, role)
        .then((res) => {
          dispatch(addRole());
        })
        .catch((error) => console.log(error));
    };
  };

  export const roleEdit = (role, id) => {
    return  function (dispatch) {
      axios
        .put(`http://localhost:3000/role/${id}`, role)
        .then((res) => {
          dispatch(editRole());
        })
        .catch((error) => console.log(error));
    };
  };



  export const deleteRole = (id) => {
    return async (dispatch) => {
      axios
        .delete(`http://localhost:3000/role/${id}`)
        .then((res) => {
          dispatch(deleteSelectedRole());
          dispatch(getRoles());
        })
        .catch((error) => console.log(error));
    };
  };

  export const getOneRole= (id) => {
    return function (dispatch) {
      axios
        .get(`http://localhost:3000/role/${id}`)
        .then((res) => {
          dispatch(setRole(res.data));
        })
        .catch((error) => console.log(error));
    };
  };
