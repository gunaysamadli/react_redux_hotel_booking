import { ActionTypes } from "../contants/actionTypes";
import axios from "axios";

export const setFloors = (floors) => {
  return {
    type: ActionTypes.SET_FLOORS,
    payload: floors,
  };
};

export const selectedFloor = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};


export const gettFloors= () => {
  return async  function (dispatch) {
    await axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Flour`)
      .then((res) => {
        dispatch(setFloors(res.data));
      })
      .catch((error) => console.log(error));
  };
};