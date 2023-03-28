import { ReactNode, useEffect } from "react";
import SessionProvider from "../context/sessionContext";

/* eslint-disable camelcase */

const Layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/3");
  }, []);

  return (
    <SessionProvider
      value={{ auth_token: "aaaaaaaaaaaaaa", refresh_token: "xxxxxxxxxxxxx" }}
    >
      <div className="w-full h-screen">{children}</div>
    </SessionProvider>
  );
};

export default Layout;
