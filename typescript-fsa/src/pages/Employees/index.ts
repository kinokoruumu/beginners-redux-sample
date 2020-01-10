import { connect } from "react-redux";
import { Employees as Component } from "./Employees";
import { getEmployeesAction } from "../../store/modules/employee/actions";
import { RootState } from "../../store";

export const Employees = connect(
  (state: RootState) => ({
    employee: state.employee
  }),
  dispatch => ({
    getEmployeesAction: () => dispatch(getEmployeesAction() as any)
  })
)(Component);
