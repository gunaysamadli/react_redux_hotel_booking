import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  brons: [],
};

export const bronReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BRON:
      return { ...state, brons: payload };
    case ActionTypes.ADD_BRONS:
      return { ...state };
    default:
      return state;
  }
};
