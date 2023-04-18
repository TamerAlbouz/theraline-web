import { format } from "date-fns";
import { Message } from "../../../../hooks/queries/useMessagesQuery";

function MessageItem(props: {
  message: Message;
  isFirst: boolean;
  isLast: boolean;
  isOnly: boolean;
  showTime: boolean;
}) {
  const date = new Date(props.message.send_at);
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
        props.message.sentByMe ? "justify-end" : "justify-start"
      } ${props.isFirst ? "mt-6" : ""}
      ${props.isLast ? "mb-6" : ""} ${props.isOnly ? "my-6" : "my-1"}
      `}>
      {props.showTime && props.message.sentByMe && (
        <span className="mr-2 text-sm">{formattedTime}</span>
      )}

      <div
        className={`flex flex-col px-4 py-3  ${
          props.message.sentByMe
            ? "mx-4 rounded-l-3xl bg-green-500 text-white"
            : "rounded-r-3xl bg-gray-300 text-black"
        } ${
          !props.message.sentByMe && (props.isOnly || props.isFirst)
            ? "rounded-t-3xl rounded-br-3xl"
            : ""
        } ${
          props.message.sentByMe && (props.isOnly || props.isFirst)
            ? "rounded-t-3xl rounded-bl-3xl"
            : ""
        } 
        ${
          props.message.sentByMe && props.isLast
            ? "rounded-l-3xl rounded-br-3xl"
            : ""
        }
        ${
          !props.message.sentByMe && props.isLast
            ? "rounded-r-3xl rounded-bl-3xl"
            : ""
        }`}>
        <span
          className={`text-xs   ${
            props.message.sentByMe ? "text-gray-50" : "text-gray-500"
          }`}>
          {props.message.username}
        </span>
        <span className="whitespace-pre-wrap">{props.message.text}</span>
      </div>

      {props.showTime && !props.message.sentByMe && (
        <span className="ml-2 text-sm">{formattedTime}</span>
      )}
    </div>
  );
}

export default MessageItem;
