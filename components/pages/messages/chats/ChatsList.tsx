import { useState } from "react";
import ChatCard from "./ChatCard";
import { chatModel } from "../../../../types/chats/chat";
import { useChatsQuery } from "../../../../hooks/queries/useChatsQuery";

function ChatsList() {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, isError } = useChatsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error has ocurred</div>;
  }

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

      {filterChats(data!).map((chat, index) => {
        return (
          <ChatCard
            chat={chat}
            isLast={index === data!.length - 1}
            key={chat.id}
          />
        );
      })}
    </div>
  );
}

export default ChatsList;
