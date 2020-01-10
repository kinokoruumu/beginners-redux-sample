import { connect } from "react-redux";
import { Employees as Component } from "./Employees";
import { getEmployees } from "../../store/modules/employee/actions/GetEmployeesAction";
import { RootState } from "../../store";

export const Employees = connect(
  (state: RootState) => ({
    employee: state.employee
  }),
  dispatch => ({
    getEmployees: () => dispatch(getEmployees() as any)
  })
)(Component);
