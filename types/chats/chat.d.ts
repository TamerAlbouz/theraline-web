import { messageModel } from "./message.d";

export type chatModel = {
  id: string;
  name: string;
  profileImageUrl: string | undefined;
  lastMessage: messageModel | undefined | null;
  type: string;
};
