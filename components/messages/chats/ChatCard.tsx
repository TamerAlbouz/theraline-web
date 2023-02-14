import { chatModel } from "../../../types/chats/chat";

function ChatCard(props: { chat: chatModel }) {
  console.log("building");
  return (
    <div className="flex cursor-pointer flex-row items-start justify-between border-b border-gray-200 py-3 px-2 transition-all duration-150 hover:bg-gray-50">
      <div className="flex flex-row items-center">
        <div className="relative">
          <img
            className="h-12 w-12 cursor-pointer rounded-full"
            src={props.chat.profileImageUrl}
            alt="Profile Photo"
          />

          {props.chat.isActive && (
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500" />
          )}
        </div>

        <div className="ml-4 mr-6 flex flex-col">
          <span className="font-bold text-black">{props.chat.name}</span>

          <span
            className={
              props.chat.unreadCount > 0 ? "text-black" : "text-gray-500"
            }
          >
            {props.chat.lastMessage}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <span>{props.chat.lastMessageDate}</span>

        {props.chat.unreadCount > 0 && (
          <div className="mt-2 flex h-6 w-6 items-center justify-center rounded-xl bg-green-500 px-2 py-1 text-center text-sm font-bold text-white">
            {props.chat.unreadCount}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatCard;
