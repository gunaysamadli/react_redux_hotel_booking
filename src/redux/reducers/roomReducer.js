import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  rooms: [],
  current: [],
};

export const roomReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROOMS:
      return { ...state, rooms: payload };
    case ActionTypes.SELECTED_ROOMS:
      return { ...state, current: payload };
    default:
      return state;
  }
};

