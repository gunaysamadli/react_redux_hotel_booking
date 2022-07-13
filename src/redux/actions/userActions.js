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


export const getUsers = () => {
  return async  function (dispatch) {
    await axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User`)
      .then((res) => {
        dispatch(setUsers(res.data));
        
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
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



export const userLogin = (email,password) => {
  return function (dispatch) {
    axios
      .post(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User`, email,password)
      .then((res) => {
        dispatch(getSingleUser(res.data));     
      })
      .catch((error) => console.log(error));
  };
};



// export const userLogout = (email,password) => {
//   return function (dispatch) {
//     axios
//       .post(`https://62b8199bf4cb8d63df5896fd.mockapi.io/User`, email,password)
//       .then((res) => {
//         dispatch(setUser(res.data));
//       })
//       .catch((error) => console.log(error));
//   };
// };


