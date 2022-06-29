import { ActionTypes } from "../contants/actionTypes";

export const setBrons = (brons) => {
  return {
    type: ActionTypes.SET_BRON,
    payload: brons,
  };
};