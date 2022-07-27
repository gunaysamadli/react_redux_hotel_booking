import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  whishlist: [],
};

if (localStorage.getItem("whishlist")) {
  initialState.whishlist = JSON.parse(localStorage.getItem("whishlist"));
} else {
  initialState.whishlist = [];
}

export const whishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_WHISHLIST:
      return { whishlist: [...payload] };
    case ActionTypes.REMOVE_WHISHLIST:
      return  { whishlist: [...payload] };
    default:
      return state;
  }
};
