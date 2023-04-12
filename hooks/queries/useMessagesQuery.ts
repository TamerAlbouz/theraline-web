import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import { messageModel } from "../../types/chats/message";
import { useMessageStore } from "../stores/useMessageStore";

const getChats = async (chatId: string | undefined, page: number) => {
  if (chatId == undefined) {
    return Promise;
  }

  return accessClient.get(`/message/${chatId}/chat?page=${page}`);
};

export const useMessagesQuery = (chatId: string | undefined) => {
  return useInfiniteQuery(
    [`messages-${chatId}`],
    ({ pageParam = 1 }) => getChats(chatId, pageParam),
    {
      getNextPageParam: (lastPage: any, pages) => {
        return lastPage.info.page + 1;
      },
      // select: (data: any) => {
      //   let messages: Array<messageModel> = [];

      //   data.data.docs.forEach((element: any) => {
      //     messages.push({
      //       id: element._id,
      //       time: element.send_at,
      //       message: element.text,
      //       isMe: false,
      //     });
      //   });
      //   console.log(messages);

      //   return messages;
      // },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: useMessageStore.getState().selectedChat != undefined,
    },
  );
};
