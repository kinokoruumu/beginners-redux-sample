import { combineReducers } from "redux";
import { counterReducer } from "./modules/counter/reducers";

export const createRootReducer = () =>
  combineReducers({
    counter: counterReducer
  });
