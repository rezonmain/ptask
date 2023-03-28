import { createContext, Dispatch, useContext, useReducer } from "react";
import useRegisterFetchInterceptor from "../hooks/useRegisterFetchInterceptor";

/* eslint-disable camelcase */

export interface SessionStore {
  auth_token: string;
  refresh_token: string;
}

type SessionAction =
  | { type: "set_auth_token"; payload: SessionStore["auth_token"] }
  | { type: "set_refresh_token"; payload: SessionStore["refresh_token"] };

interface SessionContext extends SessionStore {
  dispatch: Dispatch<SessionAction>;
}

export const SessionContext = createContext<SessionContext | null>(null);

export const useSession = (): SessionContext | null =>
  useContext(SessionContext);

const sessionReducer = (
  state: SessionStore,
  action: SessionAction
): SessionStore => {
  switch (action.type) {
    case "set_auth_token":
      return { ...state, auth_token: action.payload };
    case "set_refresh_token":
      return { ...state, refresh_token: action.payload };
    default:
      return state;
  }
};

const SessionProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: SessionStore;
}) => {
  useRegisterFetchInterceptor(value);
  const [session, dispatch] = useReducer(sessionReducer, {
    auth_token: value.auth_token,
    refresh_token: value.refresh_token,
  });

  return (
    <SessionContext.Provider value={{ ...session, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
