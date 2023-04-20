import axios, { AxiosRequestConfig } from "axios";
import useAuthStore from "../../hooks/stores/useAuthStore";

const { setAccessToken } = useAuthStore.getState();
const { setIsAuthenticated } = useAuthStore.getState();

export const baseURL = "https://theraline-backend-api.vercel.app";

export const refreshToken = async () => {
  try {
    const res = await refreshClient.post("/auth/refresh");
    console.log("Refresh");
    return res.data.access_token;
  } catch (err) {
    console.log("Refresh Failed");
    throw err;
  }
};

const refreshClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${useAuthStore.getState().refreshToken}`,
  },
});

export const accessClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

accessClient.interceptors.request.use(
  (config) => {
    if (useAuthStore.getState().accessToken) {
      config.headers.Authorization = `Bearer ${
        useAuthStore.getState().accessToken
      }`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

accessClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status } = error.response;
    if (status === 401 && useAuthStore.getState().refreshToken) {
      try {
        const newAccessToken = await refreshToken();
        setAccessToken(newAccessToken);

        const { config } = error;
        config.headers.common.Authorization = `Bearer ${newAccessToken}`;
        console.log("Reached Interceptor Response");
        return await axios(config);
      } catch (err) {
        console.warn("Failed", err);
        setIsAuthenticated(false);
        throw err;
      }
    }

    return Promise.reject(error);
  },
);
