import { getSession } from "next-auth/react";
import ChatsList from "../../components/messages/chats/ChatsList";
import MessageList from "../../components/messages/MessageList";

function MessegesPage() {
  return (
    <div>
      <ChatsList />
      <MessageList />
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

export default MessegesPage;
