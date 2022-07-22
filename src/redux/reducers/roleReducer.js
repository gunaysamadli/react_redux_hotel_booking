import { ActionTypes } from "../contants/actionTypes";
import { RoleTypes } from "../contants/actionTypes";

const initialState = {
  roles: [],
  isAdmin: null,
  isManager: null,
  isUser: null,
  role: {},
};

export const roleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROLES:
      return {
        ...state,
        roles: payload,
        isAdmin: state.roles.filter(
          (role) => role.name === RoleTypes.IS_ADMIN
        )[0],
        isManager: state.roles.filter(
          (role) => role.name === RoleTypes.IS_MANAGER
        )[0],
        isUser: state.roles.filter(
          (role) => role.name === RoleTypes.IS_USER
        )[0],
      };
    case ActionTypes.SET_ROLE:
      return { ...state, role: payload };
    case ActionTypes.EDIT_ROLE:
      return { ...state };
    default:
      return state;
  }
};
