import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  reviews: [],
  review: {},
};

export const reviewReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_REVIEWS:
      return { ...state, reviews: payload };
    case ActionTypes.SET_REVIEW:
      return { ...state, review: payload };
    case ActionTypes.EDIT_REVIEW:
      return { ...state };
    default:
      return state;
  }
};
