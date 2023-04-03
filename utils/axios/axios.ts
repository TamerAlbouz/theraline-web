import axios, { AxiosRequestConfig } from "axios";
import useAuthStore from "../../hooks/stores/useAuthStore";

const { setAccessToken } = useAuthStore.getState();
const { setIsAuthenticated } = useAuthStore.getState();

const baseURL = "https://theraline.onrender.com";

const refreshToken = async () => {
  try {
    const res = await refreshClient.post("/auth/refresh");
    return res.data.access_token;
  } catch (err) {
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
        return await axios(config);
      } catch (err) {
        setIsAuthenticated(false);
        throw err;
      }
    }

    return Promise.reject(error);
  },
);
