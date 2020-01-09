import axios from "axios";

export const getEmployees = () => {
  return axios.get("http://dummy.restapiexample.com/api/v1/employees");
};
