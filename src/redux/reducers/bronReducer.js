import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  brons: [],
  bron: [],
  loading: false,
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

// case ActionTypes.EDIT_BRON:
// return {
//   ...state,
//   bron: {
//     ...state.bron,
//     payload,
//   },
// };
