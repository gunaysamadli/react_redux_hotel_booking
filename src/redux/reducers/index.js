import { combineReducers } from "redux";
import { floorReducer, selectedFloorReducer } from "./floorReducer";
import { bronReducer } from "./bronReducer";
import { roomReducer, selectedRoomReducer } from "./roomReducer";

const reducers = combineReducers({
    allRooms: roomReducer,
    room: selectedRoomReducer,
    allFloors: floorReducer,
    floor:selectedFloorReducer,
    allBrons:bronReducer


})

export default reducers;