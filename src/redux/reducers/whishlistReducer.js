import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  whishlist: [],
  whishlistItem: {},
};


export const whishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_WHISHLIST:
      return {...state };
    case ActionTypes.SET_WHISHLISTES:
      return { ...state, whishlist: payload };
    default:
      return state;
  }
};
