import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    rooms: []
}


export const roomReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ROOMS:
            return { ...state, rooms: payload };
            
        case ActionTypes.FILTER_ROOMS_BY_PRICE:
            return {
                ...state,
                sort: payload.sort,
                filteredItems: payload.rooms,
            };
        default:
            return state;
    }
}

export const selectedRoomReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_ROOMS:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_ROOMS:
            return {};
        default:
            return state;
    }
};