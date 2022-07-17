import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  users: [],
  user: [],
  
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
    case ActionTypes.SET_USER:
      return { ...state, user: payload };
    case ActionTypes.ADD_USER:
    case ActionTypes.EDIT_USER:
      return { ...state };
    default:
      return state;
  }
};

