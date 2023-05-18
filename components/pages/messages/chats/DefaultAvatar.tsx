import { HiUser, HiUsers } from "react-icons/hi2";
import { Chat } from "../../../../hooks/queries/chats/useChatsQuery";

function DefaultAvatar({ chat }: { chat: Chat }) {
  const { groupType } = chat;

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
      {groupType === "GROUP" ? (
        <HiUsers className="h-7 w-7 text-primary" />
      ) : (
        <HiUser className="h-7 w-7 text-primary" />
      )}
    </div>
  );
}

export default DefaultAvatar;
