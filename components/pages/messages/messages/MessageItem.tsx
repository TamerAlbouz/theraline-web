import { messageModel } from "../../../../types/chats/message";

function MessageItem(props: {
  message: messageModel;
  profileImageUrl: string;
  isFirst: boolean;
  isLast: boolean;
  isOnly: boolean;
}) {
  // console.log(
  //   `${props.message.message}, isFirst: ${props.isFirst}, isLast: ${props.isLast}, isOnly: ${props.isOnly}`
  // );

  return (
    <div
      className={`flex flex-row items-end ${
        props.message.isMe ? "justify-end" : "justify-start"
      } ${props.isFirst ? "mt-6" : ""}
      ${props.isLast ? "mb-6" : ""} ${props.isOnly ? "my-6" : "my-1"}`}>
      {!props.message.isMe && (props.isOnly || props.isLast) && (
        <img
          className="mr-2 h-10 w-10 cursor-pointer rounded-full"
          src={props.profileImageUrl}
          alt="Profile Photo"
        />
      )}
      {!props.message.isMe && !(props.isOnly || props.isLast) && (
        <div className="mr-2 h-10 w-10" />
      )}

      {props.isLast && props.message.isMe && (
        <span className="mr-2 text-sm">{props.message.time}</span>
      )}

      <div
        className={`px-4 py-3 ${
          props.message.isMe
            ? "rounded-l-3xl bg-green-500 text-white"
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
        <span className="ml-2 text-sm">{props.message.time}</span>
      )}
    </div>
  );
}

export default MessageItem;
