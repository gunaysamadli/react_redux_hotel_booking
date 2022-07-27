import { ActionTypes } from "../contants/actionTypes";


export const addToWhishList = (room) => async (dispatch) => {
  const whishlist = localStorage.getItem("whishlist")
    ? JSON.parse(localStorage.getItem("whishlist"))
    : [];

  const duplicates = whishlist.filter(
    (whishlistItem) => whishlistItem.id === room.id
  );

  if (duplicates.length === 0) {
    const roomToAdd = {...room};

    whishlist.push(roomToAdd);

    localStorage.setItem("whishlist", JSON.stringify(whishlist));

    dispatch({
      type: ActionTypes.ADD_WHISHLIST,
      payload: whishlist,
    });
  } else {

    const updatedWhishList = whishlist.filter(
      (whishlistItem) => whishlistItem.id !== room.id
    );

    localStorage.setItem("whishlist", JSON.stringify(updatedWhishList));

    dispatch({
      type: ActionTypes.REMOVE_WHISHLIST,
      payload: updatedWhishList,
    });
  }
};

