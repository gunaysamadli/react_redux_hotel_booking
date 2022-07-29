
import axios from "axios";
import { ActionTypes } from "../contants/actionTypes";


export const setReviews = (reviews) => {
  return {
    type: ActionTypes.SET_REVIEWS,
    payload: reviews,
  };
};

export const setReview = (review) => {
  return {
    type: ActionTypes.SET_REVIEW,
    payload: review,
  };
};

export const editReview = () => {
  return {
    type: ActionTypes.EDIT_REVIEW,
  };
};

export const addReview  = () => {
    return {
      type: ActionTypes.ADD_REVIEW,
    };
  };


  export const deleteselectedReview= () => {
    return {
      type: ActionTypes.DELETE_REVIEW,
    };
  };




export const getReviews = () => {
  return async function (dispatch) {
    await axios
      .get(`http://localhost:3000/review`)
      .then((res) => {
        dispatch(setReviews(res.data));

      })
      .catch((error) => console.log(error));
  };
};

export const reviewAdded = (review) => {
    return function (dispatch) {
      axios
        .post(`http://localhost:3000/review`, review)
        .then((res) => {
          dispatch(addReview());
          dispatch(getReviews());
        })
        .catch((error) => console.log(error));
    };
  };

  export const reviewEdit = (review, id) => {
    return  function (dispatch) {
      axios
        .put(`http://localhost:3000/role/${id}`, review)
        .then((res) => {
          dispatch(editReview());
        })
        .catch((error) => console.log(error));
    };
  };



  export const deleteReview = (id) => {
    return async (dispatch) => {
      axios
        .delete(`http://localhost:3000/review/${id}`)
        .then((res) => {
          dispatch(deleteselectedReview());
          dispatch(getReviews());
        })
        .catch((error) => console.log(error));
    };
  };

  export const getOneReview= (id) => {
    return function (dispatch) {
      axios
        .get(`http://localhost:3000/review/${id}`)
        .then((res) => {
          dispatch(setReview(res.data));
        })
        .catch((error) => console.log(error));
    };
  };
