import { ActionTypes } from "../contants/actionTypes";
import axios from "axios";

export const setWhishListes = (whishlist) => {
  return {
    type: ActionTypes.SET_WHISHLISTES,
    payload: whishlist,
  };
};

export const addWhishList = () => {
  return {
    type: ActionTypes.ADD_WHISHLIST,
  };
};

export const deleteSelectedWhishList = () => {
  return {
    type: ActionTypes.REMOVE_WHISHLIST,
  };
};

export const getWhisList = () => {
  return async function (dispatch) {
    await axios
      .get(`http://localhost:3000/whishlist`)
      .then((res) => {
        dispatch(setWhishListes(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const addToWhishList  = (whishlistItem)  => {
  return function (dispatch) {
    axios
      .post(`http://localhost:3000/whishlist`, whishlistItem)
      .then((res) => {
        dispatch(addWhishList());
        dispatch(getWhisList());
      })
      .catch((error) => console.log(error));
  };
   
  };

  export const deleteWhishList = (id) => {
    return async (dispatch) => {
      axios
        .delete(`http://localhost:3000/whishlist/${id}`)
        .then((res) => {
          dispatch(deleteSelectedWhishList());
          dispatch(getWhisList());
        })
        .catch((error) => console.log(error));
    };
  };




// export const addToWhishList = (room) => async (dispatch) => {
//   const whishlist = localStorage.getItem("whishlist")
//     ? JSON.parse(localStorage.getItem("whishlist"))
//     : [];

//   const duplicates = whishlist.filter(
//     (whishlistItem) => whishlistItem.id === room.id
//   );

//   if (duplicates.length === 0) {
//     const roomToAdd = { ...room };

//     whishlist.push(roomToAdd);

//     localStorage.setItem("whishlist", JSON.stringify(whishlist));

//     dispatch({
//       type: ActionTypes.ADD_WHISHLIST,
//       payload: whishlist,
//     });

//   } else {
//     const updatedWhishList = whishlist.filter(
//       (whishlistItem) => whishlistItem.id !== room.id
//     );

//     localStorage.setItem("whishlist", JSON.stringify(updatedWhishList));

//     dispatch({
//       type: ActionTypes.REMOVE_WHISHLIST,
//       payload: updatedWhishList,
//     });
//   }
// };
