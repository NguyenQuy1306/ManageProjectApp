import EmailFormContainer from "./EmailFormContainer";
import "./SignInFormContainer.css";

const SignInFormContainer = () => {
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
            <EmailFormContainer />
            <div className="password-parent11">
              <div className="password11">Password</div>
              <div className="group-child11" />
              <div className="enter-your-password-parent11">
                <div
                  className="enter-your-password11"
                  data-scroll-to="enterYourPassword"
                >
                  Enter your Password
                </div>
                <img className="padlock-1-icon11" alt="" src="/padlock-1.svg" />
              </div>
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
            <div className="group-inner11" />
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
