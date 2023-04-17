import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import { AxiosResponse } from "axios";

export type ReceivedMessage = {
  _id: string;
  text: string;
  user_id: string;
  send_at: Date;
};

export type Chat = {
  _id: string;
  name: string;
  groupType: "PRIVATE" | "GROUP";
  groupImage: string;
  latestMessage?: ReceivedMessage;
  image?: string;
};

const getChats = (): Promise<AxiosResponse<Chat[]>> => {
  return accessClient.get(`/groups/get_chats`);
};

const useChatsQuery = () => {
  return useQuery({
    queryKey: ["chats"],
    select: (data) => data.data,
    queryFn: getChats,
  });
};

export default useChatsQuery;
