import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    floors: [],
}


export const floorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FLOORS:
            return { ...state, floors: payload };
        default:
            return state;
    }
}


export const selectedFloorReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FLOORS:
            return { ...state, ...payload };
        default:
            return state;
    }
};