import Axios from "axios";
import { interceptors } from "./interceptors";

export const companies_axios = Axios.create({
  baseURL: `http://localhost:5050/api/companies`,
});

interceptors(companies_axios, "/");