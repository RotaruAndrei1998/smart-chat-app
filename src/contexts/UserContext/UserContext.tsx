import {createContext} from "react";

interface ContextState {
    address: string | undefined | null;
    name: string | undefined | null;
    image: string | undefined | null;
    isWalletConnected: Function | undefined | null;
}
//set an empty object as default state
const UserContext = createContext({} as ContextState);

export default UserContext;