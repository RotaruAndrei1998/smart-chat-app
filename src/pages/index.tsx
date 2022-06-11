import { useContext, useEffect, useState } from "react";
import { Contract, ethers, Signer } from "ethers";
import abi from "../utils/MyToken.json";
import { Web3Provider } from "@ethersproject/providers";
import ChatContainer from "../components/Chat/ChatContainer";
import Messages from "../components/Chat/Messages";
import InputMessage from "../components/Chat/InputMessage";
import UserContext from "../contexts/UserContext/UserContext";
import message from "../components/Chat/Message";
import UsersContext from "../contexts/UsersContext/UsersContext";
import CreateAccount from "../components/CreateAccount";

declare let window: any;

const getColor = (messageType: string): string => {
  if (messageType === "high") {
    return "red";
  }

  if (messageType === "medium") {
    return "yellow";
  }

  return "black";
};

const getAmmount = (messageType: string): string => {
  if (messageType === "high") {
    return "0.001";
  }

  if (messageType === "medium") {
    return "0.0005";
  }

  return "0.0001";
};
export default function Home() {
  const { address, name, image, isWalletConnected } = useContext(UserContext);
  const { users } = useContext(UsersContext);

  // const sendMessage = async () => {
  //   try {
  //     const { ethereum } = window;
  //
  //     if (ethereum) {
  //       const provider: Web3Provider = new ethers.providers.Web3Provider(
  //         ethereum,
  //         "any"
  //       );
  //       const signer: Signer = provider.getSigner();
  //       const smartChatContract: Contract = new ethers.Contract(
  //         contractAddress,
  //         contractABI,
  //         signer
  //       );
  //
  //       console.log("sending message..");
  //       console.log("type", messageType);
  //       const sendMessageTxn = await smartChatContract.sendMessage(
  //         message,
  //         messageType,
  //         { value: ethers.utils.parseEther(getAmmount(messageType)) }
  //       );
  //       console.log(message, messageType);
  //       await sendMessageTxn.wait();
  //
  //       console.log("mined ", sendMessageTxn.hash);
  //
  //       console.log("coffee purchased!");
  //
  //       // Clear the form fields.
  //       setName("");
  //       setMessage("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="w-full h-full flex">
      <div className="w-3/4 bg-white flex flex-col">
        <ChatContainer>
          <Messages />
          <InputMessage name={name} />
        </ChatContainer>
      </div>
      <div className="w-1/4 p-5">
        {name ? (
          <div className="flex">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={image} onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src="https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg";
                }}/>
              </div>
            </div>
            <div className="flex flex-col justify-center ml-3">
              <div className="text-2xl font-bold">{name}</div>
              <div className="text-xs">{address}</div>
            </div>
          </div>
        ) : (
          <CreateAccount
            address={address}
            isWalletConnected={isWalletConnected}
          />
        )}
        <div className="border border-gray-500 mt-4 mb-4" />
        {users
          .filter(({ accAddress }) => accAddress.toLowerCase() !== address)
          .map(({ image, name, accAddress }) => (
            <div className="flex mt-3">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img
                    src={image}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src="https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg";
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center ml-3">
                <div className="text-2xl font-bold">{name}</div>
                <div className="text-xs">{accAddress}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
