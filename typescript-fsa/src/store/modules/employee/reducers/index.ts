import {
  getEmployeesAction
} from "../actions/GetEmployeesAction";
import { Domain } from "../../../../client/types";
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export type EmployeeState = {
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

export const employeeReducer = reducerWithInitialState(initialState)
  .case(getEmployeesAction.started, (state) => ({
    ...state,
    requesting: true
  }))
  .case(getEmployeesAction.done, (state, action) => ({
    ...state,
    requesting: false,
    employees: action.result
  }))
  .case(getEmployeesAction.failed, (state) => ({
    ...state,
    requesting: false
  }))

