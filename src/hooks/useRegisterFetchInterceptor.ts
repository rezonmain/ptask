import fetchIntercept from "fetch-intercept";
import { useCallback } from "react";
import { SessionStore } from "../context/sessionContext";

/* eslint-disable camelcase */

type R = {
  unregister: () => void;
};

const useRegisterFetchInterceptor = ({
  auth_token,
}: {
  auth_token: SessionStore["auth_token"];
}): R => {
  const unregister = useCallback(
    fetchIntercept.register({
      request: (url, config) => {
        const authHeader = { authorization: `${auth_token}` };
        if (!config) return [url, { headers: authHeader }];
        config.headers = { ...config.headers, ...authHeader };
        return [url, config];
      },

      response: (res) => {
        handleAuthError(res);
        return res;
      },
    }),
    [auth_token]
  );

  return { unregister };
};

const handleAuthError = (
  res: fetchIntercept.FetchInterceptorResponse
): void => {
  if ([401, 403].includes(res.status)) {
    if (window.self !== window.top) {
      window.parent.postMessage({ message: "no-token" }, "*");
    }
  }
};

export default useRegisterFetchInterceptor;
