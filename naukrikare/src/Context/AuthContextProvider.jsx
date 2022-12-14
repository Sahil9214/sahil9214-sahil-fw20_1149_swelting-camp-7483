import React from "react";

export const AppContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const login = (tok) => {
    setIsAuth(true);
    setToken(tok);
  };
  const Logout = () => {
    setIsAuth(false);
    setToken(null);
  };

  const value={isAuth,token,Logout,login}
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AuthContextProvider;
