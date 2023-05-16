import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { AxiosResponse } from "axios";
import { useMessageStore } from "../../stores/useMessageStore";

export type ChatUser = {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
  image: string | null | undefined;
};

const getChatUsers = (
  chatId: string | undefined,
): Promise<AxiosResponse<ChatUser[]>> => {
  return accessClient.get(`/groups/users/${chatId}`);
};

const useChatUsersQuery = (chatId: string | undefined) => {
  return useQuery({
    queryKey: ["chat-users", chatId],
    select: (data: any) => {
      console.log(data);
      return data.data;
    },
    queryFn: () => getChatUsers(chatId),
    enabled:
      useMessageStore.getState().selectedChat != undefined &&
      useMessageStore.getState().selectedChat != null,
  });
};

export default useChatUsersQuery;
