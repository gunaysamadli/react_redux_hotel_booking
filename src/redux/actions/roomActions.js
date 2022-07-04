import axios from "axios";
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

export const getSingleRoom= (id) => {
  return function (dispatch) {
    axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Room/${id}`)
      .then((res) => {
        dispatch(selectedRoom(res.data));
      })
      .catch((error) => console.log(error));
  };
};


export const getRooms = () => {
  return function (dispatch) {
    axios
      .get(`https://62b8199bf4cb8d63df5896fd.mockapi.io/Room`)
      .then((res) => {
        dispatch(setRoom(res.data));
      })
      .catch((error) => console.log(error));
  };
};


// export const sortProducts = (sort, filteredProduct) => (dispatch) => {
//   const sortedProduct = filteredProduct.slice();
//   if (sort === "latest") {

//     sortedProduct.sort((a, b) => (a._id > b._id ? 1 : -1));
//   } else {

//     sortedProduct.sort((a, b) =>
//       sort === "lowest"
//         ? a.price > b.price
//           ? 1
//           : -1
//         : a.price > b.price
//         ? -1
//         : 1
//     );
//   }
//   dispatch({
//     type: ActionTypes.FILTER_PRODUCTS_BY_PRICE,
//     payload: { sort: sort, products: sortedProduct },
//   });
// };
