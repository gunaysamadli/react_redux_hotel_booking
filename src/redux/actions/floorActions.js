import { ActionTypes } from "../contants/actionTypes";

export const setFloors = (floors) => {
  return {
    type: ActionTypes.SET_FLOORS,
    payload: floors,
  };
};

export const selectedFloor = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};
// export const removeSelectedProduct = () => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//   };
// };