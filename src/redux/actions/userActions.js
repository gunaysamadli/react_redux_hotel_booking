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

export const editUser = () => {
  return {
    type: ActionTypes.EDIT_USER,
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




// export const userDelete = (user, id) => {
//   return function (dispatch) {
//     axios
//       .put(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User/${id}`, user)
//       .then((res) => {
//         dispatch(editUser());
//         localStorage.removeItem("token");
//       })
//       .catch((error) => console.log(error));
//   };
// };
