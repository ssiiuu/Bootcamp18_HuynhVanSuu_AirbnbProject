import { combineReducers } from "redux";
import { locationReducer } from "./locationReducer";
import { roomReducer } from "./roomReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  userReducer,
  locationReducer,
  roomReducer,
});
