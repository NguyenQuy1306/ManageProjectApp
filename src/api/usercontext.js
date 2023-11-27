import React from "react";
const Usercontext = React.createContext({ username: "", auth: false });
const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({ username: "", auth: false });
  const loginContext = (username, token) => {
    setUser((user) => ({
      username: username,
      auth: true,
    }));
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  };
  const logoutContext = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser((user) => ({
      username: "",
      auth: false,
    }));
  };
  return (
    <Usercontext.Provider value={{ user, loginContext, logoutContext }}>
      {children}
    </Usercontext.Provider>
  );
};
export { UserProvider, Usercontext };
