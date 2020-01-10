import React from "react";
import { EmployeeState } from "../../store/modules/employee/reducers";

type Props = {
  getEmployees: () => void;
  employee: EmployeeState;
};
export const Employees: React.FunctionComponent<Props> = ({
  getEmployees,
  employee
}) => {
  React.useEffect(() => {
    getEmployees();
  }, [getEmployees]);
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
