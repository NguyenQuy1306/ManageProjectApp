import React from "react";

import axios from "./customaxios";
import { API_SERVER_URL } from '../config';

const loginApi = (username, password) => {
  return axios.post("api/token/obtain/", { username, password });
};
export { loginApi };
