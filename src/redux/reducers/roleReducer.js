import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  roles: [],
  role: {},
};

export const roleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROLES:
      return { ...state, roles: payload };
    case ActionTypes.SET_ROLE:
      return { ...state, role: payload };
    case ActionTypes.EDIT_ROLE:
      return { ...state };
    default:
      return state;
  }
};
