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

export const deleteSelectedBron = () => {
  return {
    type: ActionTypes.DELETE_BRON,
  };
};

export const editBron = () => {
  return {
    type: ActionTypes.EDIT_BRON,
  };
};

export const getBrons = () => {
  return async  function (dispatch) {
    await axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Bron`)
      .then((res) => {
        dispatch(setBrons(res.data));
      })
      .catch((error) => console.log(error));
  };
};



export const getSingleBron = (id) => {
  return function (dispatch) {
    axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Bron/${id}`)
      .then((res) => {
        dispatch(setBron(res.data));
      })
      .catch((error) => console.log(error));
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

export const bronEdit = (bron, id) => {
  return function (dispatch) {
    axios
      .put(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Bron/${id}`, bron)
      .then((res) => {
        dispatch(editBron());
      })
      .catch((error) => console.log(error));
  };
};

export const deleteBron = (id) => {
  return async (dispatch) => {
    axios
      .delete(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Bron/${id}`)
      .then((res) => {
        dispatch(deleteSelectedBron());
        dispatch(getBrons());
      })
      .catch((error) => console.log(error));
  };
};
