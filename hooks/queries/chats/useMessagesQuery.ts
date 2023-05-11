import { useInfiniteQuery } from "@tanstack/react-query";
import { accessClient } from "../../../utils/axios/axios";
import { useMessageStore } from "../../stores/useMessageStore";
import { AxiosResponse } from "axios";

export type Message = {
  _id: string;
  text: string;
  user_id: string;
  send_at: Date;
  sentByMe: boolean;
  username: string;
};

export type GetMessages = {
  docs: Message[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: false;
  hasNextPage: true;
  prevPage: null;
  nextPage: number;
};

const getMessages = (
  chatId: string | undefined,
  page: number,
): Promise<AxiosResponse<GetMessages>> => {
  console.log(`Getting Messages for Page: ${page}`);
  return accessClient.get(`/message/${chatId}/chat?page=${page}`);
};

export const useMessagesQuery = (chatId: string | undefined) => {
  return useInfiniteQuery(
    ["messages", chatId],
    ({ pageParam = 0 }) => getMessages(chatId, pageParam),
    {
      // TODO: fix this
      getNextPageParam: (_, pages) => {
        if (pages.length === 1) {
          return 1;
        }

        if (pages.length < pages[0].data.totalPages) {
          return pages.length;
        }

        return undefined;
      },

      refetchInterval: 1000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: useMessageStore.getState().selectedChat != undefined, // !!chatId
    },
  );
};
