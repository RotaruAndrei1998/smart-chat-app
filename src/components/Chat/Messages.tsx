import { ethers } from "ethers";
import abi from "../../utils/MyToken.json";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext/UserContext";
import { Message as MessageInterface } from "../../interfaces/MessageInterface";
import Message from "./Message";
import ContractContext from "../../contexts/ContractContext/ContractContext";
import UsersContext from "../../contexts/UsersContext/UsersContext";

const Messages = () => {
  const [messages, setMessages] = useState<Array<MessageInterface>>([]);
  const { address, name, image } = useContext(UserContext);
  const { contract } = useContext(ContractContext);
  const { users } = useContext(UsersContext);
  // @ts-ignore
  const getMessages = async () => {
    try {
      console.log("fetching messages from the blockchain..");
      const messages = await contract.getMessages();
      console.log("fetched!");
      console.log(messages);
      setMessages(
        messages.map((msg) => ({
          from: msg[0],
          timestamp: msg[1],
          message: msg[2],
          messageType: msg[3],
          isMe: msg[0].toLowerCase() === address,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMessages();

    const onNewMessage = (
      from: string,
      timestamp: number,
      message: string,
      messageType: string,
      isMe: boolean,
    ) => {
      const newMessage: MessageInterface = {
        from,
        timestamp,
        message,
        messageType,
        users,
        isMe,
      };
      setMessages((messages: Array<MessageInterface>) => [
        ...messages,
        newMessage,
      ]);
    };

    contract.on("NewMessageEvent", onNewMessage);
    return () => {
      if (contract) {
        contract.off("NewMessageEvent", onNewMessage);
      }
    };
  }, [address]);

  return (
    <div className="p-5">
      {messages.map((message) => (
        <Message {...message} users={users} />
      ))}
    </div>
  );
};
export default Messages;
