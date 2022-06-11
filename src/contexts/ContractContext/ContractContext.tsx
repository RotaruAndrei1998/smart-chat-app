import {createContext} from "react";
import {Contract} from "ethers";

interface ContextState {
    contract: Contract | undefined | null;
    contractAddress: string | undefined | null;
}
//set an empty object as default state
const ContractContext = createContext({} as ContextState);

export default ContractContext;
