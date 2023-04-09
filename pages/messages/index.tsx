import ChatsList from "../../components/pages/messages/chats/ChatsList";
import AppMessageList from "../../components/pages/messages/messages/MessageList";
import { useChatsQuery } from "../../hooks/queries/useChatsQuery";
import useAuthStore from "../../hooks/stores/useAuthStore";
import { useMessageStore } from "../../hooks/stores/useMessageStore";

function MessagesPage() {
  const { data, isLoading, isFetching } = useChatsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <div className="flex h-[50rem] w-full flex-row">
      <div className="w-2/5">
        <ChatsList chats={data!} />
      </div>

      <div className="w-3/5">
        <AppMessageList />
      </div>
    </div>
  );
}

export default MessagesPage;
