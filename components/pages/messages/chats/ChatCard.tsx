import { useMessageStore } from "../../../../hooks/stores/useMessageStore";
import { chatModel } from "../../../../types/chats/chat";
import DefaultAvatar from "./DefaultAvatar";

function ChatCard(props: { chat: chatModel; isLast: boolean }) {
  const { selectedChat, setSelectedChat } = useMessageStore();

  const selectChat = () => {
    setSelectedChat(props.chat);
  };

  return (
    <div
      onClick={selectChat}
      className={`flex cursor-pointer flex-row items-start justify-between py-3 px-2 transition-all duration-150 hover:bg-primary ${
        props.isLast ? "" : "border-b border-gray-200"
      } ${selectedChat == props.chat ? "bg-primary" : ""}`}>
      <div className="flex flex-row items-center">
        <div className="relative">
          {props.chat.profileImageUrl ? (
            <img
              className="h-12 w-12 cursor-pointer rounded-full"
              src={props.chat.profileImageUrl}
              alt="Profile Photo"
            />
          ) : (
            <DefaultAvatar chat={props.chat} />
          )}

          {/* {props.chat.isActive && (
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500" />
          )} */}
        </div>

        <div className="ml-4 mr-6 flex flex-col">
          <span className="font-bold">{props.chat.name}</span>

          <span className="text-gray-100">
            {props.chat.lastMessage?.message}
          </span>
        </div>
      </div>

      {/* <div className="flex flex-col items-end">
        <span>{props.chat.lastMessageDate}</span>

        {props.chat.unreadCount > 0 && (
          <div className="mt-2 flex h-6 w-6 items-center justify-center rounded-xl bg-green-500 px-2 py-1 text-center text-sm font-bold text-textColor">
            {props.chat.unreadCount}
          </div>
        )}
      </div> */}
    </div>
  );
}

export default ChatCard;
