import { format } from "date-fns";
import { messageModel } from "../../../../types/chats/message";
import DefaultAvatar from "../chats/DefaultAvatar";

function MessageItem(props: {
  message: messageModel;
  profileImageUrl: string | undefined;
  isFirst: boolean;
  isLast: boolean;
  isOnly: boolean;
}) {
  const date = new Date(props.message.time);
  let formattedTime;
  // today
  if (new Date().toDateString() == date.toDateString()) {
    formattedTime = format(date, "p");
  } else {
    formattedTime = format(date, "PP");
  }

  return (
    <div
      className={`flex flex-row items-end ${
        props.message.isMe ? "justify-end" : "justify-start"
      } ${props.isFirst ? "mt-6" : ""}
      ${props.isLast ? "mb-6" : ""} ${props.isOnly ? "my-6" : "my-1"}
      `}>
      {/* {!props.message.isMe &&
        (props.isOnly || props.isLast) &&
        (props.profileImageUrl ? (
          <img
            className="mr-2 h-10 w-10 cursor-pointer rounded-full"
            src={props.profileImageUrl}
            alt="Profile Photo"
          />
        ) : (
          <DefaultAvatar />
        ))} */}
      {/* {!props.message.isMe && !(props.isOnly || props.isLast) && (
        <div className="mr-2 h-10 w-10" />
      )} */}

      {props.isLast && props.message.isMe && (
        <span className="mr-2 text-sm">{formattedTime}</span>
      )}

      <div
        className={`px-4 py-3 ${
          props.message.isMe
            ? "mx-4 rounded-l-3xl bg-green-500 text-white"
            : "rounded-r-3xl bg-gray-300 text-black"
        } ${
          !props.message.isMe && (props.isOnly || props.isFirst)
            ? "rounded-t-3xl rounded-br-3xl"
            : ""
        } ${
          props.message.isMe && (props.isOnly || props.isFirst)
            ? "rounded-t-3xl rounded-bl-3xl"
            : ""
        } 
        ${
          props.message.isMe && props.isLast
            ? "rounded-l-3xl rounded-br-3xl"
            : ""
        }
        ${
          !props.message.isMe && props.isLast
            ? "rounded-r-3xl rounded-bl-3xl"
            : ""
        }`}>
        <span className="whitespace-pre-wrap">{props.message.message}</span>
      </div>

      {props.isLast && !props.message.isMe && (
        <span className="ml-2 text-sm">{formattedTime}</span>
      )}
    </div>
  );
}

export default MessageItem;
