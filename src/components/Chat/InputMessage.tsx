import { useContext, useState } from "react";
import { Contract, ethers, Signer } from "ethers";
import { getAmmount, getMessageInt } from "../../utils/helpers/messageHelpers";
import { Web3Provider } from "@ethersproject/providers";
import ContractContext from "../../contexts/ContractContext/ContractContext";
import UserContext from "../../contexts/UserContext/UserContext";

const InputMessage = ({name}) => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("normal");
  const { contract } = useContext(ContractContext);
  const sendMessage = async () => {
    try {
      if (!contract) {
        return;
      }

      const sendMessageTxn = await contract.sendMessage(
        message,
        getMessageInt(messageType),
        { value: ethers.utils.parseEther(getAmmount(messageType)) }
      );
      await sendMessageTxn.wait();

      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex">
        <textarea
          placeholder="Send your message..."
          className="textarea textarea-bordered w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={!name}
        />
        <div>
          <select
            className="select w-full"
            onChange={(e) => setMessageType(e.target.value)}
            value={messageType}
            disabled={!name}
          >
            <option value="normal">Normal</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button onClick={sendMessage} className={`btn btn-accent w-full ${!name ? "!text-[#243329]" : ""}`} disabled={!name}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputMessage;
