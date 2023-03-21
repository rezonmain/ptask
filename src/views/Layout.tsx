import { ReactNode } from "react";
import Header from "../components/Nav";
import Nav from "../components/Nav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen bg-stone-50 text-bg-stone-90 dark:bg-stone-900 dark:text-stone-50">
      {children}
    </div>
  );
};

export default Layout;
