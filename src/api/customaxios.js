import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in",
});

instance.interceptors.response.use(
  function (response) {
    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    let res = {};

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      // The request was made but no response was received
      console.log("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error object:", error); // Log the entire error object
    }

    return Promise.reject(res); // Reject the Promise with the error object
  }
);

export default instance;
