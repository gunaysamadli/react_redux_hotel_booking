import axios from "axios";
import { ActionTypes } from "../contants/actionTypes";

export const setRoom = (rooms) => {
  return {
    type: ActionTypes.SET_ROOMS,
    payload: rooms,
  };
};

export const selectedRoom = (room) => {
  return {
    type: ActionTypes.SELECTED_ROOMS,
    payload: room,
  };
};



export const showLoader = () => (dispatch) => {
  dispatch({
    type: ActionTypes.SHOW_LOADER,
  });
};

export const hideLoader = () => (dispatch) => {
  dispatch({
    type: ActionTypes.HIDE_LOADER,
  });
};


export const getSingleRoom= (id) => {
  return async function (dispatch) {
    await axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Room/${id}`)
      .then((res) => {
        dispatch(selectedRoom(res.data));
      })
      .catch((error) => console.log(error));
  };
};


export const getRooms = () => {
  return async function (dispatch) {
    await axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Room`)
      .then((res) => {
        dispatch(setRoom(res.data));
      })
      .catch((error) => console.log(error));
  };
};


