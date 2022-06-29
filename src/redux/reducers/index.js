import { combineReducers } from "redux";
import { floorReducer, selectedFloorReducer } from "./floorReducer";
import { bronReducer } from "./bronReducer";
import { roomReducer } from "./roomReducer";

const reducers = combineReducers({
  allRooms: roomReducer,
  allFloors: floorReducer,
  floor: selectedFloorReducer,
  allBrons: bronReducer,
});

export default reducers;
