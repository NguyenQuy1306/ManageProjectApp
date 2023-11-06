import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import TextInput from ".././Chat/TextInput";
import MyButton from ".././Chat/MyButton";
import "../Login/Login.css";
import "../Worker/glassmorphism.css";

const LoginPage = ({
  setAuthenticated,
  setUserID,
  setUserLogin,
  setUserAccount,
  setUser,
  setVehicle,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState([]);
  const [localUser, setLocalUser] = useState([]);

  useEffect(() => {
    document.body.classList.add("login-page");
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  const onSubmit = (event) => {
    const user = account.find(
      (u) => u.username === email && u.password === password
    );
    setUserAccount(user);

    if (user) {
      // toast.success("Đăng nhập thành công");
      localStorage.setItem("authenticated", true);
      setAuthenticated(true);
      console.log(`User ${user.username} logged in as ${user.userType}`);
      setUserID(user.workerID);
      setUserLogin(localUser.find((u) => u._id === user.workerID));
    } else {
      const errorMsg = account.some((u) => u.username === email)
        ? "Sai mật khẩu"
        : "Tài khoản không tồn tại";
      toast.error(errorMsg);
    }

    event.preventDefault();
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Xin chào 👋</div>

        <div className="form-subtitle">Chưa có tài khoản? Đăng ký</div>

        <div className="auth">
          <TextInput
            label="Tên đăng nhập"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            label="Password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <MyButton type="submit">Đăng nhập</MyButton>
        </div>
      </form>
      <ToastContainer
        hideProgressBar={true}
        limit={1}
        autoClose={3000}
      ></ToastContainer>
    </div>
  );
};

export default LoginPage;
