import UserContext from "./UserContext";
import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../../utils/MyToken.json";
import ContractContext from "../ContractContext/ContractContext";
import CreateAccount from "../../components/CreateAccount";

const UserContextProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const { contract } = useContext(ContractContext);
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        const account = accounts[0];
        setAccount(account);
        const tokenId = await contract.tokenOfOwnerByIndex(account, 0);
        const tokenDataEncoded = await contract.getTokenURI(tokenId);
        const tokenDataDecoded = JSON.parse(
          atob(tokenDataEncoded.split("base64,")[1])
        );
        console.log(tokenId, tokenDataDecoded);
        setName(tokenDataDecoded.name);
        setImage(tokenDataDecoded.image_data);
        console.log("wallet is connected! " + account);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const createAccount = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const createAccountTxn = await contract.safeMint(
          account,
          "Andrei Dev",
          "https://i1.sndcdn.com/artworks-000215207650-a9ejfn-t500x500.jpg",
          { value: ethers.utils.parseEther("0.001") }
        );

        await createAccountTxn.wait();

        console.log("account created!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isWalletConnected();
  }, [contract]);

  useEffect(() => {
    const handleAccountsChanged = () => {
      isWalletConnected();
    };

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, []);

  return (
    <UserContext.Provider value={{ address: account, name, image, isWalletConnected }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
