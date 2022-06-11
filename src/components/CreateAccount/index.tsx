import { ethers } from "ethers";
import { useContext, useState } from "react";
import ContractContext from "../../contexts/ContractContext/ContractContext";

const CreateAccount = ({ address,isWalletConnected }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { contract } = useContext(ContractContext);

  const createAccount = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        console.log("creating account..", address);
        const createAccountTxn = await contract.safeMint(
          address,
          name,
          imageUrl,
          { value: ethers.utils.parseEther("0.001") }
        );

        await createAccountTxn.wait();
        isWalletConnected()
        console.log("account created!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Image url</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button onClick={createAccount} className="btn btn-accent w-full">
        Create account
      </button>
    </div>
  );
};

export default CreateAccount;
