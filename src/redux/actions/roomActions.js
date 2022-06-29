import { ActionTypes } from "../contants/actionTypes";

export const setRoom = (rooms) => {
  return {
    type: ActionTypes.SET_ROOMS,
    payload: rooms,
  };
};

export const selectedRoom = (room) => {
  return {
    type: ActionTypes.SELECTED_ROOMS,
    payload: room,
  };
};
export const removeSelectedRoom = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ROOMS,
  };
};

export const sortProducts = (sort, filteredProduct) => (dispatch) => {
  const sortedProduct = filteredProduct.slice();
  if (sort === "latest") {
    
    sortedProduct.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    
    sortedProduct.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  dispatch({
    type: ActionTypes.FILTER_PRODUCTS_BY_PRICE,
    payload: { sort: sort, products: sortedProduct },
  });
};

