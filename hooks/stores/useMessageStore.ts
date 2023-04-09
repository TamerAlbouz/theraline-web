import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { messageModel } from "../../types/chats/message.d";
import { chatModel } from "../../types/chats/chat";

interface MessagesState {
  selectedChat: chatModel | undefined;
  messages: Array<messageModel>|undefined;
  setSelectedChat: (newChat: chatModel) => void;
}

const useMessageStore = create<MessagesState>()(
  devtools(
    persist(
      (set) => ({
        selectedChat: undefined,
        messages:undefined,
        setSelectedChat: (newChat: chatModel) =>
          set((_: any) => ({ selectedChat: newChat })),
      }),
      {
        name: "messages-storage",
      },
    ),
  ),
);

export { useMessageStore };
