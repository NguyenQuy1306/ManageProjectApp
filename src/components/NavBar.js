import { ReactComponent as BellIcon } from "../../src/icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../../src/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../../src/icons/caret.svg";
import { ReactComponent as PlusIcon } from "../../src/icons/plus.svg";
import { ReactComponent as CogIcon } from "../../src/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../src/icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../src/icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../src/icons/bolt.svg";
import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { Usercontext } from "../api/usercontext";
function Mynavbar() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem
        className="customNavItem3"
        icon={
          <img
            src={require("../assets/images/User-Profile-Transparent.png")}
            alt="Icon"
            className="customImage"
          />
        }
      >
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar1306">
      <ul className="navbar-nav1306">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item1306">
      <a href="#" className="icon-button1306" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);
  const { logoutContext, user } = useContext(Usercontext);
  const handleLogout = () => {
    logoutContext();
    navigate("/Login2");
    toast.success("Log out success");
  };

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item1306"
        onClick={(e) => {
          e.preventDefault(); // Prevents the default behavior of the anchor tag
          props.goToMenu && setActiveMenu(props.goToMenu);
          props.onClick && props.onClick(); // Call the provided onClick function
        }}
      >
        <span className="icon-button1306">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right1306">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div
      className="dropdown1306"
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary1306"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu1306">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          {user && user.auth === true && (
            <DropdownItem
              leftIcon="🦧"
              rightIcon={<ChevronIcon />}
              onClick={() => handleLogout()}
            >
              Logout
            </DropdownItem>
          )}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary1306"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu1306">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary1306"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu1306">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Mynavbar;
