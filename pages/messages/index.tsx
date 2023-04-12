import ChatsList from "../../components/pages/messages/chats/ChatsList";
import AppMessageList from "../../components/pages/messages/messages/MessageList";

function MessagesPage() {
  return (
    <div className="flex h-[50rem] w-full flex-row">
      <div className="w-2/5">
        <ChatsList />
      </div>

      <div className="w-3/5">
        <AppMessageList />
      </div>
    </div>
  );
}

export default MessagesPage;
