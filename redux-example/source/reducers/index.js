import { combineReducers } from "redux";
import { devices } from "./device";
import { notifications } from "./notification";

const rootReducer = combineReducers({
  devices,
  notifications,
});

export default rootReducer;
