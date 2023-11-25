import React from "react";
const Usercontext = React.createContext({ email: "", auth: false });
const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({ email: "", auth: false });
  const loginContext = (email, token) => {
    setUser((user) => ({
      email: email,
      auth: true,
    }));
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };
  const logoutContext = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser((user) => ({
      email: "",
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
