import { combineReducers } from "redux";
import { counterReducer } from "./modules/counter/reducers";
import { employeeReducer } from "./modules/employee/reducers";

export const createRootReducer = () =>
  combineReducers({
    counter: counterReducer,
    employee: employeeReducer
  });
