import { Message as MessageProps } from "../../interfaces/MessageInterface";
import { getColor } from "../../utils/helpers/messageHelpers";

const Message = (messageProps: MessageProps) => {
  const { from, timestamp, message, messageType, users, isMe } = messageProps;
  const name = users.find((user) => user.accAddress === from)?.name;
  const messageColor =
    "text-[" +
    users.find((user) => user.accAddress === from)?.messageColor +
    "]";
  const renderMessageIcon = () => {
    if (messageType === "high") {
      return <img src="/alert.svg" className="h-5 inline" />;
    }

    if (messageType === "medium") {
        return <img src="/sign-warning.svg" className="h-5 inline" />;
    }
    return "";
  };
  return isMe ? (
    <div className="flex justify-end mb-2">
      <div className="rounded py-2 px-3 bg-[#E2F7CB] max-w-5xl">
        <p className="text-sm mt-1">{message}</p>
        <p className="text-right text-xs text-grey-dark mt-1">
          {timestamp.toString()}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex mb-2">
      <div className="rounded py-2 px-3 bg-[#F2F2F2] max-w-5xl">
        <p className={`text-sm ${messageColor}`}>{name}</p>
        <p className="text-sm mt-1">
          {renderMessageIcon()} {message}
        </p>
        <p className="text-right text-xs text-grey-dark mt-1">
          {timestamp.toString()}
        </p>
      </div>
    </div>
  );
};

export default Message;
