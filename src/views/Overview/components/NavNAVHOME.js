import { useMemo } from "react";
import "./NavNAVHOME.css";
import { useNavigate } from "react-router-dom";

const NavNAVHOME = ({
  brandLogo,
  navNAVHOMEPosition,
  navNAVHOMETop,
  navNAVHOMELeft,
  navButtonBackground,
}) => {
  const navigate = useNavigate();

  const handleToLogin = () => {
    // Assuming successful login, navigate to the user page
    navigate("/Login");
  };
  const navNAVHOMEStyle = useMemo(() => {
    return {
      position: navNAVHOMEPosition,
      top: navNAVHOMETop,
      left: navNAVHOMELeft,
    };
  }, [navNAVHOMEPosition, navNAVHOMETop, navNAVHOMELeft]);

  const navButtonStyle = useMemo(() => {
    return {
      background: navButtonBackground,
    };
  }, [navButtonBackground]);

  return (
    <div className="navnav-home" style={navNAVHOMEStyle}>
      <img className="brandlogo-icon1" alt="" src={brandLogo} />
      <div className="nav-tem-parent">
        <div className="nav-tem">
          <b className="home">Home</b>
          <div className="nav-tem-child" />
        </div>
        <div className="nav-tem1">
          <div className="home1">About us</div>
        </div>
        <div className="nav-tem1">
          <div className="home1">Services</div>
        </div>
        <div className="nav-tem1">
          <div className="home1">Case Studies</div>
        </div>
        <div className="nav-tem1">
          <div className="home1">Blog</div>
        </div>
        <div className="nav-tem1">
          <div className="home1">How it Works</div>
        </div>
        <div className="nav-tem1">
          <div className="home1">Hire</div>
        </div>
      </div>
      <div className="nav-button">
        <button className="contact-us" onClick={() => handleToLogin()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default NavNAVHOME;
