import { format } from "date-fns";
import { Message } from "../../../../hooks/queries/useMessagesQuery";

function MessageItem(props: {
  message: Message;
  isFirst: boolean;
  isLast: boolean;
  isOnly: boolean;
  showTime: boolean;
}) {
  const { message, isFirst, isLast, isOnly, showTime } = props;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { sentByMe, send_at, username, text } = message;
  const date = new Date(send_at);
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
        sentByMe ? "justify-end" : "justify-start"
      } ${isFirst ? "mt-6" : ""}
      ${isLast ? "mb-6" : ""} ${isOnly ? "my-6" : "my-1"}
      `}>
      {showTime && sentByMe && (
        <span className="mr-2 text-sm">{formattedTime}</span>
      )}

      <div
        className={`flex flex-col px-4 py-3  ${
          sentByMe
            ? "mx-4 rounded-l-3xl bg-green-500 text-white"
            : "rounded-r-3xl bg-gray-300 text-black"
        } ${
          !sentByMe && (isOnly || isFirst) ? "rounded-t-3xl rounded-br-3xl" : ""
        } ${
          sentByMe && (isOnly || isFirst) ? "rounded-t-3xl rounded-bl-3xl" : ""
        } 
        ${sentByMe && isLast ? "rounded-l-3xl rounded-br-3xl" : ""}
        ${!sentByMe && isLast ? "rounded-r-3xl rounded-bl-3xl" : ""}`}>
        <span
          className={`text-xs   ${
            sentByMe ? "text-gray-50" : "text-gray-500"
          }`}>
          {username}
        </span>
        <span className="whitespace-pre-wrap">{text}</span>
      </div>

      {showTime && !sentByMe && (
        <span className="ml-2 text-sm">{formattedTime}</span>
      )}
    </div>
  );
}

export default MessageItem;
