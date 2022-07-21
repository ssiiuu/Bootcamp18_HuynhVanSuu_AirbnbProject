import { combineReducers } from "redux";
import { loadingReducer } from "./loadingReducer";
import { locationReducer } from "./locationReducer";
import { roomReducer } from "./roomReducer";
import { userReducer } from "./userReducer";
import { valueateReducer } from "./valueateReducer";

export const rootReducer = combineReducers({
  userReducer,
  locationReducer,
  roomReducer,
  loadingReducer,
  valueateReducer,
});
