import MessageItem from "./MessageItem";
import MessageTextInput from "./MessageTextInput";
import { useMessageStore } from "../../../../hooks/stores/useMessageStore";
import { useMessagesQuery } from "../../../../hooks/queries/useMessagesQuery";
import { messageModel } from "../../../../types/chats/message";

function AppMessageList() {
  const { selectedChat } = useMessageStore();

  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useMessagesQuery(selectedChat?.id);

  if (selectedChat == undefined) {
    return (
      <div className="flex items-center justify-center">
        Please choose a chat
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  data!.pages.map((page: any) =>
    page.results.map((msg: any) => {
      console.log(msg);
    }),
  );

  let messages: Array<messageModel> = []; //data!;
  const messageItems: Array<JSX.Element> = [];

  for (let i = 0; i < messages.length; i++) {
    let isFirst = false;
    let isLast = false;
    let isOnly = false;

    if (i == 0) {
      isFirst = true;

      if (
        i + 1 <= messages.length - 1 &&
        messages[i].isMe != messages[i + 1].isMe
      ) {
        isOnly = true;
      }
    } else if (i == messages.length - 1) {
      isLast = true;
    } else {
      if (
        messages[i].isMe != messages[i - 1].isMe &&
        messages[i].isMe != messages[i + 1].isMe
      ) {
        isOnly = true;
      } else if (
        messages[i].isMe != messages[i - 1].isMe &&
        messages[i].isMe == messages[i + 1].isMe
      ) {
        isFirst = true;
      }
      if (
        messages[i].isMe == messages[i - 1].isMe &&
        messages[i].isMe != messages[i + 1].isMe
      ) {
        isLast = true;
      }
    }

    messageItems.push(
      <MessageItem
        message={messages[i]}
        profileImageUrl={selectedChat.profileImageUrl}
        isFirst={isFirst}
        isLast={isLast}
        isOnly={isOnly}
        key={i}
      />,
    );
  }

  return (
    <div className="relative flex h-full flex-col justify-end rounded-r-lg bg-primary px-4 py-2">
      <div className="overflow-y-scroll scroll-smooth">
        {selectedChat == undefined && (
          <span>Please select a chat to continue</span>
        )}
        {messageItems.length == 0 && (
          <span>No messages have been sent. Be the first to reach out!</span>
        )}

        {messageItems}
      </div>
      <div>{selectedChat != undefined && <MessageTextInput />}</div>
    </div>
  );
}

export default AppMessageList;
