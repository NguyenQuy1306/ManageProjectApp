import React, { useCallback, useState } from "react";
import "./EmailFormContainer.css";

const EmailFormContainer = () => {
  const [email, setEmail] = useState("");

  const onEnterYourEmailClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='enterYourPassword']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission
    console.log("Email submitted:", email);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEnterYourEmailClick();
    }
  };
  return (
    <div className="email-parent22">
      <div className="email22">Email</div>
      {/* Form */}
      <form onSubmit={onFormSubmit} className="formemail">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          className="inputemail"
          onChange={onEmailInputChange}
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

export default EmailFormContainer;
