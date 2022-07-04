import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  brons: [],
  bron: [],
};

export const bronReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BRONS:
      return { ...state, brons: payload };
    case ActionTypes.SET_BRON:
      return { ...state, bron: payload };
    case ActionTypes.DELETE_BRON:
    case ActionTypes.EDIT_BRON:
    case ActionTypes.ADD_BRONS:
      return { ...state };
    default:
      return state;
  }
};
