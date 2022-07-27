import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  whishlist: [
    {}
  ],
  whishlistItem: {},
};

if (localStorage.getItem("whishlist")) {
  initialState.whishlist = JSON.parse(localStorage.getItem("whishlist"));
} else {
  initialState.whishlist = [];
}

export const whishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case ActionTypes.ADD_WHISHLIST:
    //   return { whishlist: [...payload] };
    // case ActionTypes.REMOVE_WHISHLIST:
    //   return { whishlist: [...payload] };
    case ActionTypes.ADD_WHISHLIST:
      return {...state };
    case ActionTypes.SET_WHISHLISTES:
      return { ...state, whishlist: payload };
    default:
      return state;
  }
};
