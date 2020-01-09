import React from "react";
import { getEmployeesAction } from "../../store/modules/employee/actions";
import { RootState } from "../../store";

type Props = {
  getEmployeesAction: typeof getEmployeesAction;
  employee: RootState["employee"]; // 雑実装
};
export const Employees: React.FunctionComponent<Props> = ({
  getEmployeesAction,
  employee
}) => {
  React.useEffect(() => {
    getEmployeesAction();
  }, [getEmployeesAction]);
  if (employee.requesting) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {employee.employees.length > 0 ? (
        <ul>
          {employee.employees.slice(0, 10).map(employee => (
            <li key={employee.id}>{employee.employee_name}</li>
          ))}
        </ul>
      ) : (
        <p>データがありませんでした</p>
      )}
    </div>
  );
};
