import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  favoryItems: [],
  favoryItem: {},
  cart: [],
};

export const whishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_WHISHLIST:
      let tempCart = state.cart.filter((item) => item.id === payload.id);
      if (tempCart < 1) {
        return { ...state.cart,payload };
      }else{
        return state.cart
      }
    default:
      return state;
  }
};
