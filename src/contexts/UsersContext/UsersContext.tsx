import { createContext } from "react";
import { User } from "../../interfaces/UserInterface";

interface ContextState {
  users: Array<User>;
}
//set an empty object as default state
const UsersContext = createContext({ users: [] } as ContextState);

export default UsersContext;
