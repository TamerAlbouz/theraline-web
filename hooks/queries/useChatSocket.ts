import { useQueryClient } from "@tanstack/react-query";
import { io } from "socket.io-client";
import { refreshToken, baseURL } from "../../utils/axios/axios";
import useAuthStore from "../stores/useAuthStore";
import { useEffect } from "react";

export const useChatSocket = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    const { accessToken, setAccessToken } = useAuthStore.getState();
    const websocket = io(`${baseURL}/chat?accessToken=${accessToken}`);

    // log when the connection is established
    websocket.on("connect", () => {
      console.log("Websocket connected");
    });

    // refresh token if error occurs
    websocket.on("error", async (error) => {
      console.log(`Websocket: ${error}`);
      const newAccessToken = await refreshToken();
      setAccessToken(newAccessToken);
    });

    websocket.on("newMessage", (data) => {
      console.log("Received message from server:", data);
    });

    return () => {
      websocket.close();
    };
  }, [queryClient]);
};
