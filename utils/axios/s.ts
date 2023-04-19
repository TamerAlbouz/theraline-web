import axios from "axios";
import useAuthStore from "../../hooks/stores/useAuthStore";

const { setAccessToken, setRefreshToken } = useAuthStore.getState();
const { setIsAuthenticated } = useAuthStore.getState();

export const baseURL = "https://theraline-backend-api.vercel.app";

const refreshClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${useAuthStore.getState().refreshToken}`,
  },
});

export const refreshTokenS = async (): Promise<{
  access_token: string;
  refresh_token: string;
}> => {
  refreshClient.defaults.headers.Authorization = `Bearer ${
    useAuthStore.getState().refreshToken
  }`;
  const res = await refreshClient.post("/auth/refresh");
  return res.data;
};

export const accessClientS = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

accessClientS.interceptors.request.use(
  (config) => {
    const newConfig = config;
    if (useAuthStore.getState().accessToken) {
      newConfig.headers.Authorization = `Bearer ${
        useAuthStore.getState().accessToken
      }`;
    }
    return newConfig;
  },
  (error) => Promise.reject(error),
);

accessClientS.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status } = error.response;
    if (status === 401 && useAuthStore.getState().refreshToken) {
      try {
        const accessTokens = await refreshTokenS();
        setAccessToken(accessTokens.access_token);
        setRefreshToken(accessTokens.refresh_token);
        const { config } = error;
        config.headers.common.Authorization = `Bearer ${accessTokens.access_token}`;
        return await axios(config);
      } catch (err) {
        setIsAuthenticated(false);
        throw err;
      }
    }

    return Promise.reject(error);
  },
);
