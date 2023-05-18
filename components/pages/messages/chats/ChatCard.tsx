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
    </button>
  );
}

export default ChatCard;
