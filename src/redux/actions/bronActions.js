import axios from "axios";
import { ActionTypes } from "../contants/actionTypes";

export const setBrons = (brons) => {
  return {
    type: ActionTypes.SET_BRONS,
    payload: brons,
  };
};

export const addBron = () => {
  return {
    type: ActionTypes.ADD_BRONS,
  };
};

export const setBron = (bron) => {
  return {
    type: ActionTypes.SET_BRON,
    payload: bron,
  };
};

export const bronAdded = (bron) => {
  return function (dispatch) {
    axios
      .post(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Bron`, bron)
      .then((res) => {
        dispatch(addBron());
      })
      .catch((error) => console.log(error));
  };
};
