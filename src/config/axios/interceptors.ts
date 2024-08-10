import { AxiosInstance } from "axios";
import Axios from "axios";
export const interceptors = (axios: AxiosInstance, login: string) => {
  axios.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        config.headers = config.headers || {};
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      console.log("Request error:", error);
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const response = await Axios.post(
            "",
            {},
            { withCredentials: true }
          );

          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;

          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

          return axios(originalRequest);
        } catch (refreshError) {
          console.error("Refresh token error:", refreshError);
          localStorage.removeItem("accessToken");
          window.location.href = login;
        }
      }
      return Promise.reject(error);
    }
  );
};