import axios from "axios";
import { ActionTypes } from "../contants/actionTypes";


export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const addUser = () => {
  return {
    type: ActionTypes.ADD_USER,
  };
};

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};

export const setRole = (current) => {
  return {
    type: ActionTypes.SET_ROLE,
    payload: current,
  };
};

export const editUser = () => {
  return {
    type: ActionTypes.EDIT_USER,
  };
};


export const editRole = () => {
  return {
    type: ActionTypes.EDIT_ROLE,
  };
};

export const deleteSelectedUser = () => {
  return {
    type: ActionTypes.DELETE_USER,
  };
};

export const getUsers = () => {
  return async function (dispatch) {
    await axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User`)
      .then((res) => {
        dispatch(setUsers(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleUser = (id) => {
  return  function (dispatch) {
     axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User/${id}`)
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleRole = (id) => {
  return  function (dispatch) {
     axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User/${id}`)
      .then((res) => {
        dispatch(setRole(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const userAdded = (user) => {
  return function (dispatch) {
    axios
      .post(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User`, user)
      .then((res) => {
        dispatch(addUser());
      })
      .catch((error) => console.log(error));
  };
};

export const userEdit = (user, id) => {
  return  function (dispatch) {
    axios
      .put(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User/${id}`, user)
      .then((res) => {
        dispatch(editUser());
      })
      .catch((error) => console.log(error));
  };
};

export const  roleEdit= (current, id) => {
  return  function (dispatch) {
    axios
      .put(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User/${id}`, current)
      .then((res) => {
        dispatch(editRole());
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    axios
      .delete(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User/${id}`)
      .then((res) => {
        dispatch(deleteSelectedUser());
        dispatch(getUsers());
      })
      .catch((error) => console.log(error));
  };
};



