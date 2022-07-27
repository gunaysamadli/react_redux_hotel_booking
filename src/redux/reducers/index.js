import { combineReducers } from "redux";
import { floorReducer, selectedFloorReducer } from "./floorReducer";
import { bronReducer } from "./bronReducer";
import { roomReducer } from "./roomReducer";
import { userReducer } from "./userReducer";
import { roleReducer } from "./roleReducer";
import { whishlistReducer } from "./whishlistReducer";


const reducers = combineReducers({
  allRooms: roomReducer,
  allFloors: floorReducer,
  floor: selectedFloorReducer,
  allBrons: bronReducer,
  allUsers:userReducer,
  allRoles:roleReducer,
  allWhishlist:whishlistReducer
  
});

export default reducers;
