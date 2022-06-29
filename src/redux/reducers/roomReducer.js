import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  rooms: [],
  current: [],
};

export const roomReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROOMS:
      return { ...state, rooms: payload };
    case ActionTypes.SELECTED_ROOMS:
      return { ...state, current: payload };

    // case ActionTypes.FILTER_ROOMS_BY_PRICE:
    //     return {
    //         ...state,
    //         sort: payload.sort,
    //         filteredItems: payload.rooms,
    //     };
    default:
      return state;
  }
};

