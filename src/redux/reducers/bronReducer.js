import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  brons: [],
  bron: [],
};

export const bronReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BRONS:
      return { ...state, brons: payload };
    case ActionTypes.ADD_BRONS:
      return { ...state };
    case ActionTypes.EDIT_BRON:
      return { ...state };
    case ActionTypes.SET_BRON:
      return { ...state, current: payload };
    default:
      return state;
  }
};
