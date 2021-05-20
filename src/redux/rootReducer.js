import { combineReducers } from "redux";
import taskReducer from "./items/ItemsReducers";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
