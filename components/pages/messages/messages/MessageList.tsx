import { animateScroll } from "react-scroll";
import { useEffect } from "react";
import MessageItem from "./MessageItem";
import MessageTextInput from "./MessageTextInput";
import { useMessageStore } from "../../../../hooks/stores/useMessageStore";
// eslint-disable-next-line prettier/prettier
import {
  Message,
  useMessagesQuery,
} from "../../../../hooks/queries/chats/useMessagesQuery";

// function sameDay(d1: Date, d2: Date) {
//   return (
//     d1.getUTCFullYear() === d2.getUTCFullYear() &&
//     d1.getMonth() === d2.getMonth() &&
//     d1.getDate() === d2.getDate()
//   );
// }

function AppMessageList() {
  const { selectedChat } = useMessageStore();

  const { isLoading, data, fetchNextPage } = useMessagesQuery(
    // eslint-disable-next-line no-underscore-dangle
    selectedChat?._id,
  );

  useEffect(() => {
    if (!isLoading) {
      animateScroll.scrollToBottom({
        containerId: "message-list",
      });
    }
  }, [isLoading]);

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

  const allChats: Array<Array<Message>> = data!.pages.map((page) => {
    const messageSet = page.data.docs.sort((a, b) => {
      if (a.send_at < b.send_at) {
        return -1;
      }
      if (a.send_at > b.send_at) {
        return 1;
      }
      return 0;
    });

    return messageSet;
  });

  const messages: Array<Message> = allChats.flat();
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
        messages[i].sentByMe !== messages[i + 1].sentByMe
      ) {
        isOnly = true;
      }
    } else if (i === messages.length - 1) {
      isLast = true;
      // showTime = true;
    } else {
      if (
        messages[i].sentByMe !== messages[i - 1].sentByMe &&
        messages[i].sentByMe !== messages[i + 1].sentByMe
      ) {
        isOnly = true;
      } else if (
        messages[i].sentByMe !== messages[i - 1].sentByMe &&
        messages[i].sentByMe === messages[i + 1].sentByMe
      ) {
        isFirst = true;
      }
      if (
        messages[i].sentByMe === messages[i - 1].sentByMe &&
        messages[i].sentByMe !== messages[i + 1].sentByMe
      ) {
        isLast = true;
      }

      // if (
      //   !sameDay(
      //     new Date(messages[i - 1].send_at),
      //     new Date(messages[i].send_at),
      //   ) ||
      //   !sameDay(
      //     new Date(messages[i + 1].send_at),
      //     new Date(messages[i].send_at),
      //   )
      // ) {
      //   showTime = true;
      // }
    }

    messageItems.push(
      <MessageItem
        message={messages[i]}
        isFirst={isFirst}
        isLast={isLast}
        isOnly={isOnly}
        showTime
        key={i}
      />,
    );
  }

  return (
    <div className="relative flex h-full flex-col justify-end rounded-r-lg bg-primary px-4 py-2">
      <div
        id="message-list"
        className="overflow-y-scroll scroll-smooth scrollbar-hide"
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
