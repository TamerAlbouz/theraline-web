import { getSession } from "next-auth/react";
import ChatsList from "../../components/messages/chats/ChatsList";
import AppMessageList from "../../components/messages/messages/MessageList";

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

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permenant: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default MessagesPage;
