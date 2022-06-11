import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";

import "/styles/globals.css";
import UserContextProvider from "../contexts/UserContext/UserContextProvider";
import ContractContextProvider from "../contexts/ContractContext/ContractContextProvider";
import UsersContextProvider from "../contexts/UsersContext/UsersContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContractContextProvider>
      <UserContextProvider>
          <UsersContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </UsersContextProvider>
      </UserContextProvider>
    </ContractContextProvider>
  );
}

export default MyApp;
