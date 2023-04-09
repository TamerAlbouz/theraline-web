import { useState } from "react";
import ChatCard from "./ChatCard";
import { chatModel } from "../../../../types/chats/chat";

function ChatsList(props: { chats: Array<chatModel> }) {
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

      {filterChats(props.chats).map((chat, index) => {
        return (
          <ChatCard
            chat={chat}
            isLast={index == props.chats.length - 1}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default ChatsList;
