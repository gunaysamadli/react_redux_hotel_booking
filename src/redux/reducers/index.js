import { combineReducers } from "redux";
import { floorReducer, selectedFloorReducer } from "./floorReducer";
import { bronReducer } from "./bronReducer";
import { roomReducer } from "./roomReducer";
import { userReducer } from "./userReducer";


const reducers = combineReducers({
  allRooms: roomReducer,
  allFloors: floorReducer,
  floor: selectedFloorReducer,
  allBrons: bronReducer,
  allUsers:userReducer,
});

export default reducers;
