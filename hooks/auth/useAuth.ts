import useAuthStore from "../stores/useAuthStore";

export const useAuth = () => {
  const { setAccessToken, setRefreshToken, setUser, setIsAuthenticated } =
    useAuthStore();

  const signout = () => {
    setAccessToken("");
    setRefreshToken("");
    setUser({});
    setIsAuthenticated(false);
  };

  const signin = (accessToken: string, refreshToken: string, role: string) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setUser({ role });
    setIsAuthenticated(true);
  };

  return { signout, signin };
};
