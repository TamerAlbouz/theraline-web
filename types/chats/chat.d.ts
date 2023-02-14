import { messageModel } from "./message.d";

export type chatModel = {
  id: string;
  name: string;
  profileImageUrl: string;
  lastMessageDate: string;
  lastMessage: string;
  isActive: boolean;
  unreadCount: number;
  messages: Array<messageModel>;
};
