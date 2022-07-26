import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  rooms: [],
  current: [],
  loading: false,
};

export const roomReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROOMS:
      return { ...state, rooms: payload };
    case ActionTypes.SELECTED_ROOMS:
      return { ...state, current: payload };
    case ActionTypes.HIDE_LOADER:
      return {...state,loading: false,};
    case ActionTypes.SHOW_LOADER:
      return {...state,loading: true,};
    default:
      return state;
  }
};
