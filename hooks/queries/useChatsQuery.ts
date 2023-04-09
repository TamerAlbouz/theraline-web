import { useQuery } from "@tanstack/react-query";
import { accessClient } from "../../utils/axios/axios";
import { chatModel } from "../../types/chats/chat";

const getChats = async () => {
  return accessClient.get("/groups/get_chats");
};

export const useChatsQuery = () => {
  return useQuery(["chats"], getChats, {
    select: (data: any) => {
      const chats: Array<chatModel> = [];

      console.log(data.data.chats);

      data.data.chats.forEach((element: any) => {
        chats.push({
          id: element._id,
          name: element.name,
          lastMessage: element.latestMessage
            ? {
                id: element.latestMessage._id,
                time: element.latestMessage.send_at,
                message: element.latestMessage.text,
                isMe: false,
              }
            : undefined,
          profileImageUrl: element.groupImage ?? "",
          type: element.groupType[0],
        });
      });

      return chats;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

// _id: "6418b793337d50ab61fe592f"
// ​​​
// send_at: "2023-03-20T19:44:19.883Z"
// ​​​
// text: "Hello!"
// ​​​
// user_id: "6418b239337d50ab61fe5912"

// 0: Object { _id: "6418b6fe337d50ab61fe591e", name: "Super cool group", groupType: (1) […], … }
// ​​
// _id: "6418b6fe337d50ab61fe591e"
// ​​
// groupType: Array [ "GROUP" ]
// ​​
// latestMessage: Object { _id: "6418b793337d50ab61fe592f", send_at: "2023-03-20T19:44:19.883Z", user_id: "6418b239337d50ab61fe5912", … }
// ​​​
// _id: "6418b793337d50ab61fe592f"
// ​​​
// send_at: "2023-03-20T19:44:19.883Z"
// ​​​
// text: "Hello!"
// ​​​
// user_id: "6418b239337d50ab61fe5912"
// ​​​
// <prototype>: Object { … }
// ​​
// name: "Super cool group"
