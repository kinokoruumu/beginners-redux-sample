import { getEmployees as fetchEmployees } from "../../../../client";
import { ThunkAction } from "../../../type";
import { Domain } from "../../../../client/types";
import { actionCreator } from './';

type GetEmployeesParams = void;
type GetEmployeesSuccess = Domain.Employee[];
type GetEmployeesFailed = Error;

export const getEmployeesAction = actionCreator.async<
  GetEmployeesParams,
  GetEmployeesSuccess,
  GetEmployeesFailed
>("GET_EMPLOYEES")

export function getEmployees(): ThunkAction<void, any> {
  return async dispatch => {
    dispatch(getEmployeesAction.started());
    try {
      const res = await fetchEmployees()

      const { status, data } = res.data;
      if (status !== 'success') {
        dispatch(getEmployeesAction.failed({ error: new Error(`status is not success: ${status}`) }));
        return;
      }

      dispatch(getEmployeesAction.done({
        result: data
      }));
    } catch (e) {
      dispatch(getEmployeesAction.failed({ error: e }));
    }
  };
}