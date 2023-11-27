import React, { useCallback, useState } from "react";
import "./UsernameFormContainer.css";
import axios from "react";
const UsernameFormContainer = () => {
  const [username, setUsername] = useState("");

  const onEnterYourUsernameClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='enterYourPassword']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onUsernameInputChange = (e) => {
    setUsername(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission
    console.log("Username submitted:", username);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEnterYourUsernameClick();
    }
  };
  const handleLogin = () => {
    // Assuming successful login, navigate to the user page
    navigate("/Overview");
  };
  return (
    <div className="username-parent22">
      <div className="username22">Username</div>
      {/* Form */}
      <form onSubmit={onFormSubmit} className="formusername">
        <input
          type="username"
          placeholder="Enter your username address"
          value={username}
          className="inputusername"
          onChange={onUsernameInputChange}
          // onKeyPress={thihandleKeyPress()}
        />
        {/* <button type="submit">Submit</button> */}
      </form>
      {/* End of Form */}
      <div className="component-child22" />
      <img className="message-1-icon22" alt="" src="/message-1.svg" />
    </div>
  );
};

export default UsernameFormContainer;
