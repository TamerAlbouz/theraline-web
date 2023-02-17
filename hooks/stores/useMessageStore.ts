import { messageModel } from "./../../types/chats/message.d";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { chatModel } from "../../types/chats/chat";

interface MessagesState {
  selectedChat: chatModel | undefined;
  setSelectedChat: (newChat: chatModel) => void;
}

const useMessageStore = create<MessagesState>()(
  devtools(
    persist(
      (set) => ({
        selectedChat: undefined,
        setSelectedChat: (newChat: chatModel) =>
          set((_: any) => ({ selectedChat: newChat })),
      }),
      {
        name: "messages-storage",
      }
    )
  )
);

export { useMessageStore };
