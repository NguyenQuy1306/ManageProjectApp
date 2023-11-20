import { useCallback } from "react";
import "./EmailFormContainer.css";

const EmailFormContainer = () => {
  const onEnterYourEmailClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='enterYourPassword']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="email-parent22">
      <div className="email22">Email</div>
      <div className="enter-your-email22" onClick={onEnterYourEmailClick}>
        Enter your email address
      </div>
      <div className="component-child22" />
      <img className="message-1-icon22" alt="" src="/message-1.svg" />
    </div>
  );
};

export default EmailFormContainer;
