import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  users: [],
  user: null,
  current:[]
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
    case ActionTypes.SET_USER:
      return { ...state, user: payload };
    case ActionTypes.EDIT_USER:
      return { ...state,user:payload};
    case ActionTypes.EDIT_ROLE:
      return { ...state,current:payload};
      case ActionTypes.SET_ROLE:
      return { ...state, current:payload};
    default:
      return state;
  }
};
