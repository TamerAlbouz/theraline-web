import MessageItem from "./MessageItem";
import MessageTextInput from "./MessageTextInput";
import { useMessageStore } from "../../../../hooks/stores/useMessageStore";
import { useMessagesQuery } from "../../../../hooks/queries/useMessagesQuery";
import { messageModel } from "../../../../types/chats/message";

function AppMessageList() {
  const { selectedChat } = useMessageStore();

  const { isLoading, data, fetchNextPage } = useMessagesQuery(selectedChat?.id);

  if (selectedChat === undefined) {
    return (
      <div className="flex items-center justify-center">
        Please choose a chat
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // console.log(data!.pages[0]);
  const x: Array<Array<messageModel>> = data!.pages.map((messageSet) => {
    const messages: Array<messageModel> = [];

    messageSet.data.docs.forEach((element: any) => {
      messages.push({
        // eslint-disable-next-line no-underscore-dangle
        id: element._id,
        time: element.send_at,
        message: element.text,
        isMe: element.sentByMe === "YES",
      });
    });

    return messages;
  });

  const messages: Array<messageModel> = x.flat(); // data!;
  // eslint-disable-next-line no-undef
  const messageItems: Array<JSX.Element> = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < messages.length; i++) {
    let isFirst = false;
    let isLast = false;
    let isOnly = false;

    if (i === 0) {
      isFirst = true;

      if (
        i + 1 <= messages.length - 1 &&
        messages[i].isMe !== messages[i + 1].isMe
      ) {
        isOnly = true;
      }
    } else if (i === messages.length - 1) {
      isLast = true;
    } else {
      if (
        messages[i].isMe !== messages[i - 1].isMe &&
        messages[i].isMe !== messages[i + 1].isMe
      ) {
        isOnly = true;
      } else if (
        messages[i].isMe !== messages[i - 1].isMe &&
        messages[i].isMe === messages[i + 1].isMe
      ) {
        isFirst = true;
      }
      if (
        messages[i].isMe === messages[i - 1].isMe &&
        messages[i].isMe !== messages[i + 1].isMe
      ) {
        isLast = true;
      }
    }

    messageItems.push(
      <MessageItem
        msg={messages[i]}
        isFirst={isFirst}
        isLast={isLast}
        isOnly={isOnly}
        key={i}
      />,
    );
  }

  return (
    <div className="relative flex h-full flex-col justify-end rounded-r-lg bg-primary px-4 py-2">
      <div
        className="overflow-y-scroll scroll-smooth"
        onScroll={(result: any) => {
          if (result.target.scrollTop === 0) {
            fetchNextPage();
          }
        }}>
        {selectedChat === undefined && (
          <span>Please select a chat to continue</span>
        )}
        {messageItems.length === 0 && (
          <span>No messages have been sent. Be the first to reach out!</span>
        )}

        {messageItems}
      </div>
      <div>{selectedChat !== undefined && <MessageTextInput />}</div>
    </div>
  );
}

export default AppMessageList;
