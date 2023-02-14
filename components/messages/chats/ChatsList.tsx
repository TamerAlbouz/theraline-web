import { useState } from "react";
import { chatModel } from "../../../types/chats/chat";
import ChatCard from "./ChatCard";

const dummyChats: Array<chatModel> = [
  {
    id: "1",
    isActive: false,
    lastMessage: "lorem ipsum stuff",
    lastMessageDate: "12:14 PM",
    messages: [],
    name: "Diana Tammy",
    profileImageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    unreadCount: 1,
  },
  {
    id: "2",
    isActive: true,
    lastMessage: "lorem ipsum stuff",
    lastMessageDate: "4:56 PM",
    messages: [],
    name: "Helen Troy",
    profileImageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    unreadCount: 0,
  },
];

function ChatsList() {
  const [searchValue, setSearchValue] = useState("");

  const filterChats = (chats: Array<chatModel>) => {
    if (searchValue === "") {
      return chats;
    }

    return chats.filter((chat) => {
      return chat.name.toLowerCase().includes(searchValue.toLowerCase().trim());
    });
  };

  return (
    <div className="flex w-80 flex-col rounded-md bg-white p-2">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        className="mb-4 w-full rounded-md border-gray-100 bg-white p-4 shadow-lg"
      />

      {filterChats(dummyChats).map((chat, index) => {
        return <ChatCard chat={chat} key={index} />;
      })}
    </div>
  );
}

export default ChatsList;
