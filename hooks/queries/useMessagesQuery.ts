import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import { messageModel } from "../../types/chats/message";
import { useMessageStore } from "../stores/useMessageStore";

const getChats = (chatId: string | undefined, page: number) => {
  return accessClient.get(`/message/${chatId}/chat?page=${page}`);
};

export const useMessagesQuery = (chatId: string | undefined) => {
  return useInfiniteQuery(
    [`messages-${chatId}`],
    ({ pageParam = 0 }) => getChats(chatId, pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < pages[pages.length - 1].data.totalPages) {
          return pages.length + 1;
        }
        return undefined;
      },
      //   select: (data: any) => {
      //     let messages: Array<messageModel> = [];

      //     data.data.docs.forEach((element: any) => {
      //       messages.push({
      //         id: element._id,
      //         time: element.send_at,
      //         message: element.text,
      //         isMe: false,
      //       });
      //     });
      //     console.log(messages);

      //     return messages;
      //   },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: useMessageStore.getState().selectedChat != undefined,
    },
  );
};
