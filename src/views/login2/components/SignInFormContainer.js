import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { useCallback } from "react";
import "./EmailFormContainer.css";
import "./SignInFormContainer.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "react";
import { toast } from "react-toastify";
import { loginApi } from "../../../api/Userservice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Usercontext } from "../../../api/usercontext";
import { useContext } from "react";
const SignInFormContainer = () => {
  const { loginContext } = useContext(Usercontext);
  const [loadingAPI, setloadingAPI] = useState("false");
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/Overview");
    }
  });
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();
  const onPassInputChange = (e) => {
    SetPassword(e.target.value);
  };
  const onEmailInputChange = (e) => {
    setEmail(e.target.value);
  };
  const onLoginClick = async () => {
    setloadingAPI(true);
    if (!email || !password) {
      toast.error("Email/Password is required!");
      return;
    }

    try {
      const res = await loginApi(email, password);
      console.log("check res", res);
      if (res && res.token) {
        loginContext(email, res.token);
        navigate("/Overview");
      } else {
        if (res && res.status === 400) {
          toast.error(res.data.status);
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("User not found");
    }
    setloadingAPI(false);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onEnterYourEmailClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='enterYourPassword']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEnterYourEmailClick();
    }
  };
  return (
    <div className="sign-in11">
      <div className="group-container11">
        <div className="sign-in-parent11">
          <div className="sign-in111">Sign in</div>
          <div className="if-you-dont-have-an-account-r-parent11">
            <div className="if-you-dont11">
              If you don’t have an account register
            </div>
            <div className="you-can-register-container11">
              <span>{`You can   `}</span>
              <span className="register-here11">Register here !</span>
            </div>
          </div>
        </div>
        <div className="group-div11">
          <div className="component-parent11">
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
            <div className="password-parent11">
              <div className="password11">Password</div>
              <div className="group-child11" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                className="inputpassword"
                onChange={onPassInputChange}
              />
              {/* <div className="enter-your-password-parent11">
                <div
                  className="enter-your-password11"
                  data-scroll-to="enterYourPassword"
                >
                  Enter your Password
                </div>
                <img className="padlock-1-icon11" alt="" src="/padlock-1.svg" />
              </div> */}
              <img className="padlock-1-icon11" alt="" src="/padlock-1.svg" />
              <img
                className="invisible-1-icon11"
                alt=""
                src="/invisible-1.svg"
              />
            </div>
          </div>
          <div className="rectangle-parent11">
            <div className="group-item11" />
            <div className="remember-me11">Remember me</div>
            <div className="forgot-password11">Forgot Password ?</div>
          </div>
          <div className="rectangle-group11">
            <button
              className={email && password ? "group-inner11" : "group-inner22"}
              disabled={email && password ? false : true}
              onClick={() => onLoginClick()}
            >
              {loadingAPI && <FontAwesomeIcon icon={faSync} spin />} &nbsp;
              Login
            </button>
            <div className="login111">Login</div>
          </div>
        </div>
      </div>
      <div className="or-continue-with11">or continue with</div>
      <img className="sign-in-child11" alt="" src="/group-134.svg" />
    </div>
  );
};

export default SignInFormContainer;
