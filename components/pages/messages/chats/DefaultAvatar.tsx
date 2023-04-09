import { HiUser } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { chatModel } from "../../../../types/chats/chat";

function DefaultAvatar(props: { chat: chatModel }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
      {props.chat.type === "GROUP" ? (
        <HiUsers className="h-7 w-7 text-primary" />
      ) : (
        <HiUser />
      )}
    </div>
  );
}

export default DefaultAvatar;
