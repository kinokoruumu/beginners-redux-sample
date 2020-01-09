import {
  GET_EMPLOYEE_START,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILED,
  EmployeeActions
} from "../actions";
import { Domain } from "../../../../client/types";

type EmployeeState = {
  requesting: boolean;
  success: boolean;
  failed: boolean;
  employees: Domain.Employee[];
};
const initialState: EmployeeState = {
  requesting: false,
  success: false,
  failed: false,
  employees: []
};

export function employeeReducer(
  state: EmployeeState = initialState,
  action: EmployeeActions
) {
  switch (action.type) {
    case GET_EMPLOYEE_START:
      return Object.assign({}, state, {
        requesting: true
      });
    case GET_EMPLOYEE_SUCCESS:
      return Object.assign({}, state, {
        requesting: false,
        employees: action.payload
      });
    case GET_EMPLOYEE_FAILED:
      return Object.assign({}, state, {
        requesting: false,
        failed: true
      });
    default:
      return state;
  }
}
