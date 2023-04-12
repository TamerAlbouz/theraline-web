import { io } from "socket.io-client";
import { refreshToken, baseURL } from "../../utils/axios/axios";
import useAuthStore from "../stores/useAuthStore";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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

      queryClient.invalidateQueries({
        queryKey: ["chats"],
      });
      queryClient.invalidateQueries({
        queryKey: [`messages-${data.message.group_id}`],
      });
    });

    return () => {
      websocket.close();
    };
  }, [queryClient]);
};
