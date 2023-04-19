import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Chat } from "../queries/chats/useChatsQuery";
import { Message } from "../queries/chats/useMessagesQuery";

interface MessagesState {
  selectedChat: Chat | undefined;
  messages: Array<Message> | undefined;
  setSelectedChat: (newChat: Chat) => void;
}

const useMessageStore = create<MessagesState>()(
  devtools(
    (set) => ({
      selectedChat: undefined,
      messages: undefined,
      setSelectedChat: (newChat: Chat) =>
        set((_: any) => ({ selectedChat: newChat })),
    }),
    {
      name: "messages-storage",
    },
  ),
);

export { useMessageStore };
