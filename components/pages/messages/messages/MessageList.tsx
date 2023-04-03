import { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";
import MessageTextInput from "./MessageTextInput";
import { useMessageStore } from "../../../../hooks/stores/useMessageStore";

function AppMessageList() {
  const { selectedChat } = useMessageStore();

  if (selectedChat == undefined) {
    return (
      <div className="flex items-center justify-center">
        Please choose a chat
      </div>
    );
  }

  const messageItems: Array<JSX.Element> = [];

  for (let i = 0; i < selectedChat.messages.length; i++) {
    let isFirst = false;
    let isLast = false;
    let isOnly = false;

    if (i == 0) {
      isFirst = true;

      if (
        i + 1 <= selectedChat.messages.length - 1 &&
        selectedChat.messages[i].isMe != selectedChat.messages[i + 1].isMe
      ) {
        isOnly = true;
      }
    } else if (i == selectedChat.messages.length - 1) {
      isLast = true;
    } else {
      if (
        selectedChat.messages[i].isMe != selectedChat.messages[i - 1].isMe &&
        selectedChat.messages[i].isMe != selectedChat.messages[i + 1].isMe
      ) {
        isOnly = true;
      } else if (
        selectedChat.messages[i].isMe != selectedChat.messages[i - 1].isMe &&
        selectedChat.messages[i].isMe == selectedChat.messages[i + 1].isMe
      ) {
        isFirst = true;
      }
      if (
        selectedChat.messages[i].isMe == selectedChat.messages[i - 1].isMe &&
        selectedChat.messages[i].isMe != selectedChat.messages[i + 1].isMe
      ) {
        isLast = true;
      }
    }

    messageItems.push(
      <MessageItem
        message={selectedChat.messages[i]}
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
