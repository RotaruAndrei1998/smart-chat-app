import UsersContext from "./UsersContext";
import { useContext, useEffect, useState } from "react";
import ContractContext from "../ContractContext/ContractContext";
import { User } from "../../interfaces/UserInterface";
const colors = [
  "#34568B",
  "#FF6F61",
  "#6B5B95",
  "#F7CAC9",
  "#92A8D1",
  "#955251",
  "#B565A7",
];

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState<Array<User>>([]);

  const { contract } = useContext(ContractContext);
  console.log(users);

  const getUsers = async () => {
    const _users = await contract.getAccounts();
    setUsers(
      _users.map((_user) => ({
        accAddress: _user[0],
        name: _user[1],
        image: _user[2],
        messageColor: colors[Math.floor(Math.random() * 7)],
      }))
    );
  };

  useEffect(() => {
    getUsers();
  }, [contract]);
  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
