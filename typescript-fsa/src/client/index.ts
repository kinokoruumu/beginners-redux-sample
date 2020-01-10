import axios from "axios";
import { Response } from "./types";

export const getEmployees = () => {
  return axios.get<Response.GetEmployees>("http://dummy.restapiexample.com/api/v1/employees");
};
