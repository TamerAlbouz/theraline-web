import { format } from "date-fns";
import { messageModel } from "../../../../types/chats/message";

function MessageItem(props: {
  msg: messageModel;
  isFirst: boolean;
  isLast: boolean;
  isOnly: boolean;
}) {
  const { msg, isFirst, isLast, isOnly } = props;
  const { isMe, time, message } = msg;
  const date = new Date(time);
  let formattedTime;
  // today
  if (new Date().toDateString() === date.toDateString()) {
    formattedTime = format(date, "p");
  } else {
    formattedTime = format(date, "PP");
  }

  return (
    <div
      className={`flex flex-row items-end ${
        isMe ? "justify-end" : "justify-start"
      } ${isFirst ? "mt-6" : ""}
      ${isLast ? "mb-6" : ""} ${isOnly ? "my-6" : "my-1"}
      `}>
      {/* {!isMe &&
        (isOnly || isLast) &&
        (profileImageUrl ? (
          <img
            className="mr-2 h-10 w-10 cursor-pointer rounded-full"
            src={profileImageUrl}
            alt="Profile Photo"
          />
        ) : (
          <DefaultAvatar />
        ))} */}
      {/* {!isMe && !(isOnly || isLast) && (
        <div className="mr-2 h-10 w-10" />
      )} */}

      {isLast && isMe && <span className="mr-2 text-sm">{formattedTime}</span>}

      <div
        className={`px-4 py-3 ${
          isMe
            ? "mx-4 rounded-l-3xl bg-green-500 text-white"
            : "rounded-r-3xl bg-gray-300 text-black"
        } ${
          !isMe && (isOnly || isFirst) ? "rounded-t-3xl rounded-br-3xl" : ""
        } ${isMe && (isOnly || isFirst) ? "rounded-t-3xl rounded-bl-3xl" : ""} 
        ${isMe && isLast ? "rounded-l-3xl rounded-br-3xl" : ""}
        ${!isMe && isLast ? "rounded-r-3xl rounded-bl-3xl" : ""}`}>
        <span className="whitespace-pre-wrap">{message}</span>
      </div>

      {isLast && !isMe && <span className="ml-2 text-sm">{formattedTime}</span>}
    </div>
  );
}

export default MessageItem;
