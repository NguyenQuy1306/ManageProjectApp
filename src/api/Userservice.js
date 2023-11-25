import React from "react";

import axios from "./customaxios";
const loginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};
export { loginApi };
