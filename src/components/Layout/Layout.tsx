import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <Header />
        <div className="h-full">
      {children}
        </div>
      <Footer />
    </div>
  );
};

export default Layout;
