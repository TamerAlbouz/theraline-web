import { ChangeEvent, useEffect, useRef, useState } from "react";

import { HiPaperAirplane, HiPaperClip } from "react-icons/hi2";
import { useMessageStore } from "../../../../hooks/stores/useMessageStore";
import { chatModel } from "../../../../types/chats/chat";
import { useSendMessageMutation } from "../../../../hooks/mutations/useSendMessageMutation";

function MessageTextInput() {
  const { selectedChat, setSelectedChat } = useMessageStore();
  const { mutate: sendMessage } = useSendMessageMutation();
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [input, setInput] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    setFileName("");
  }, [selectedChat]);

  const handleKeyDown = (event: any) => {
    if (event.key != "Enter") {
      return;
    }

    event.preventDefault();

    if (event.shiftKey) {
      // idk
      setInput((oldInput) => `${oldInput}\n`);

      return;
    }

    if (input == "") {
      return;
    }

    console.log(`Final Input: ${input}`);

    submitMessage();
  };

  const handleUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.files![0].name);
    console.log(`File Name: ${event.target.files![0].name}`);
  };

  const submitMessage = () => {
    sendMessage({
      text: input,
      chatId: selectedChat!.id,
    });
  };

  return (
    <div className="flex flex-row ">
      <div className="flex w-full flex-col">
        {fileName != "" && <span className="text-sm">{fileName} uploaded</span>}

        <textarea
          value={input}
          placeholder="Type here (Ctrl + Enter for a new line)"
          className=" mb-4 mt-2 w-full resize-none rounded-lg border-gray-100 bg-white p-3 text-black shadow-2xl shadow-primary-dark"
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="my-4 ml-4 flex flex-col justify-end py-1">
        <input type="file" hidden ref={fileRef} onChange={handleUploadChange} />

        <HiPaperClip
          onClick={() => fileRef.current!.click()}
          className="mb-3 h-7 w-7 cursor-pointer text-gray-100 hover:text-tertiary"
        />

        <HiPaperAirplane
          onClick={submitMessage}
          className="h-7 w-7 cursor-pointer text-gray-100 hover:text-tertiary"
        />
      </div>
    </div>
  );
}

export default MessageTextInput;
