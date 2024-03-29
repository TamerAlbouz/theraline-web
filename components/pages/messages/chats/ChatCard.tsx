import Image from "next/image";
import { format } from "date-fns";
import { useMessageStore } from "../../../../hooks/stores/useMessageStore";
import DefaultAvatar from "./DefaultAvatar";
import { Chat } from "../../../../hooks/queries/chats/useChatsQuery";

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
      className={`flex w-full cursor-pointer flex-row items-center justify-between py-3 px-2 transition-all duration-150 hover:bg-primary ${
        isLast ? "" : "border-b border-gray-200"
      } ${selectedChat === chat ? "bg-primary" : ""}`}>
      <div className="flex w-[4rem] justify-start">
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

      <div className="ml-4 mr-6 flex w-full flex-col items-start">
        <span className="font-bold">{name}</span>

        {latestMessage && (
          <div className="flex w-full flex-row justify-between">
            <span className="text-left text-sm text-gray-100">
              {latestMessage.text}
            </span>

            <span className="text-sm text-gray-100">
              {new Date().toDateString() ===
              new Date(latestMessage.send_at).toDateString()
                ? format(new Date(latestMessage.send_at), "p")
                : format(new Date(latestMessage.send_at), "PP")}
            </span>
          </div>
        )}
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
