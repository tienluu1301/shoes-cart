import axios, { AxiosError, AxiosResponse } from "axios";

const fetcher = axios.create({
  baseURL: "https://65e5a660d7f0758a76e6f357.mockapi.io" || "",
});

fetcher.interceptors.response.use(
  //success
  (response: AxiosResponse) => {
    return response.data;
  },

  (error: AxiosError) => {
    return Promise.reject(error.response?.data);
  }
);

export default fetcher;
