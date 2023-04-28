import { useState } from "react";

import { HiPaperAirplane } from "react-icons/hi2";
import { useMessageStore } from "../../../../hooks/stores/useMessageStore";
import { useSendMessageMutation } from "../../../../hooks/mutations/chats/useSendMessageMutation";

function MessageTextInput() {
  const { selectedChat } = useMessageStore();
  const { mutate: sendMessage } = useSendMessageMutation({
    // eslint-disable-next-line no-underscore-dangle
    chatId: selectedChat?._id,
  });

  const [input, setInput] = useState("");

  const submitMessage = () => {
    sendMessage({
      text: input,
      // eslint-disable-next-line no-underscore-dangle
      chatId: selectedChat!._id,
    });

    setInput("");
  };

  const handleKeyDown = (event: any) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();

    if (event.shiftKey) {
      // idk
      setInput((oldInput) => `${oldInput}\n`);

      return;
    }

    if (input === "") {
      return;
    }

    console.log(`Final Input: ${input}`);

    submitMessage();
  };

  return (
    <div className="flex flex-row ">
      <div className="flex w-full flex-col">
        <textarea
          value={input}
          placeholder="Type here (Ctrl + Enter for a new line)"
          className=" mb-4 mt-2 w-full resize-none rounded-lg border-gray-100 bg-white p-3 text-black shadow-2xl shadow-primary-dark"
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="my-4 ml-4 flex flex-col justify-end py-1">
        <HiPaperAirplane
          onClick={submitMessage}
          className="h-7 w-7 cursor-pointer text-gray-100 hover:text-tertiary"
        />
      </div>
    </div>
  );
}

export default MessageTextInput;
