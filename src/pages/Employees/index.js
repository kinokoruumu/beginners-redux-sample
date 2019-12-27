import { connect } from "react-redux";
import { Employees as Component } from "./Employees";
import { getEmployeesAction } from "../../store/modules/employee/actions";

export const Employees = connect(
  state => ({
    employee: state.employee
  }),
  dispatch => ({
    getEmployeesAction: () => dispatch(getEmployeesAction())
  })
)(Component);
