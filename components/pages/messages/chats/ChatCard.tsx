import Image from "next/image";
import { Chat } from "../../../../hooks/queries/useChatsQuery";
import { useMessageStore } from "../../../../hooks/stores/useMessageStore";
import DefaultAvatar from "./DefaultAvatar";

function ChatCard(props: { chat: Chat; isLast: boolean }) {
  const { selectedChat, setSelectedChat } = useMessageStore();
  const { chat, isLast } = props;
  const { name, groupImage, latestMessage } = chat;

  const selectChat = () => {
    setSelectedChat(chat);
  };

  return (
    <button
      type="button"
      onClick={selectChat}
      className={`flex cursor-pointer flex-row items-start justify-between py-3 px-2 transition-all duration-150 hover:bg-primary ${
        isLast ? "" : "border-b border-gray-200"
      } ${selectedChat === chat ? "bg-primary" : ""}`}>
      <div className="flex flex-row items-center">
        <div className="relative">
          {groupImage ? (
            <Image
              width={48}
              height={48}
              className="h-12 w-12 cursor-pointer rounded-full"
              src={groupImage}
              alt="Profile"
            />
          ) : (
            <DefaultAvatar chat={chat} />
          )}

          {/* {isActive && (
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500" />
          )} */}
        </div>

        <div className="ml-4 mr-6 flex flex-col items-start">
          <span className="font-bold">{name}</span>

          <span className="text-sm text-gray-100">{latestMessage?.text}</span>
        </div>
      </div>

      {/* <div className="flex flex-col items-end">
        <span>{lastMessageDate}</span>

        {unreadCount > 0 && (
          <div className="mt-2 flex h-6 w-6 items-center justify-center rounded-xl bg-green-500 px-2 py-1 text-center text-sm font-bold text-textColor">
            {unreadCount}
          </div>
        )}
      </div> */}
    </button>
  );
}

export default ChatCard;
