import NavNAVHOME from "./NavNAVHOME";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-bar-parent">
      <NavNAVHOME
        brandLogo="/brandlogo2.svg"
        navNAVHOMEPosition="absolute"
        navNAVHOMETop="0px"
        navNAVHOMELeft="0px"
        navButtonBackground="linear-gradient(225deg, #6675f7, #57007b)"
      />
      <div className="group-child16" />
      <div className="rectangle-parent4">
        <div className="group-child17" />
        <b className="protask1">ProTask</b>
        <img className="icon1" alt="" src="/icon.svg" />
      </div>
    </div>
  );
};

export default Header;
