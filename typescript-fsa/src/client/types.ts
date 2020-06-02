export namespace Domain {
  export type Employee = {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
  };
}

export namespace Response {
  export type GetEmployees = { status: string, data: Domain.Employee[] };
}
