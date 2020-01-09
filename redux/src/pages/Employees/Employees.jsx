import React from "react";

export const Employees = ({ getEmployeesAction, employee }) => {
  React.useEffect(() => {
    getEmployeesAction();
  }, []);
  if (employee.requesting) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {employee.employees.length > 0 ? (
        <ul>
          {employee.employees.splice(0, 10).map(employee => (
            <li key={employee.id}>{employee.employee_name}</li>
          ))}
        </ul>
      ) : (
        <p>データがありませんでした</p>
      )}
    </div>
  );
};
