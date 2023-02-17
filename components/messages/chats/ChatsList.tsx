import { useState } from "react";
import { chatModel } from "../../../types/chats/chat";
import ChatCard from "./ChatCard";

const dummyChats: Array<chatModel> = [
  {
    id: "1",
    isActive: false,
    lastMessage: "lorem ipsum stuff",
    lastMessageDate: "12:14 PM",
    messages: [
      { id: "0", message: "Hello", isMe: false, time: "12:14 PM" },
      { id: "1", message: "Hi", isMe: true, time: "12:15 PM" },
      {
        id: "2",
        message: "Are we still on for the appointment",
        isMe: false,
        time: "12:16 PM",
      },
      { id: "3", message: "right", isMe: true, time: "12:16 PM" },
      { id: "4", message: "Just checking", isMe: false, time: "12:16 PM" },
      { id: "5", message: "no problem", isMe: true, time: "12:18 PM" },
      { id: "6", message: "We arr", isMe: true, time: "12:18 PM" },
      {
        id: "7",
        message: "We are* (not a pirate lol)",
        isMe: true,
        time: "12:18 PM",
      },
      { id: "8", message: "Great", isMe: false, time: "12:20 PM" },
      { id: "9", message: "See you then!", isMe: false, time: "12:21 PM" },
    ],
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
    <div className="flex h-full flex-col rounded-l-lg bg-primary-dark">
      <div className="m-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
          className=" mb-4 w-full rounded-lg border-gray-100 bg-white p-4 text-black shadow-2xl shadow-primary"
        />
      </div>

      {filterChats(dummyChats).map((chat, index) => {
        return (
          <ChatCard
            chat={chat}
            isLast={index == dummyChats.length - 1}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default ChatsList;
