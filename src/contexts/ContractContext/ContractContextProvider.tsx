import abi from "../../utils/MyToken.json";
import ContractContext from "./ContractContext";
import { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import InfoSection from "../../components/InfoSection/InfoSection";

const contractAddress = "0xbc5644cCA2560d3cC11b12a95A255d966AC69495";
const contractABI = abi.abi;

const ContractContextProvider = ({ children }) => {
  const [contract, setContract] = useState<Contract>(null);

  const connectToContract = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
     await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const smartChatContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(await signer.getAddress())
        setContract(smartChatContract);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    connectToContract();
  }, []);

  return (
    <ContractContext.Provider value={{ contract, contractAddress }}>
      {contract ? children : <InfoSection connectToContract={connectToContract}/>}
    </ContractContext.Provider>
  );
};

export default ContractContextProvider;
