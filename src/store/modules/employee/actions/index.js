import { getEmployees } from "../../../../client";
export const GET_EMPLOYEE_START = "GET_EMPLOYEE_START";
export const GET_EMPLOYEE_SUCCESS = "GET_EMPLOYEE_SUCCESS";
export const GET_EMPLOYEE_FAILED = "GET_EMPLOYEE_FAILED";

const getEmployeesStart = () => ({
  type: GET_EMPLOYEE_START
});

const getEmployeesSuccess = payload => ({
  type: GET_EMPLOYEE_SUCCESS,
  payload
});

const getEmployeesFaild = () => ({
  type: GET_EMPLOYEE_FAILED
});

export function getEmployeesAction() {
  return async dispatch => {
    dispatch(getEmployeesStart());
    try {
      const res = await getEmployees();
      dispatch(getEmployeesSuccess(res.data));
    } catch (e) {
      dispatch(getEmployeesFaild());
    }
  };
}
