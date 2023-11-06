import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebardata";
import SubMenu from "./submenu";
import { IconContext } from "react-icons/lib";
import BrandApp from "../sidebar/logo";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
const Nav = styled.div`
  background: #07064a;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #07064a;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

// ... (other imports and components)

const Sidebarr = () => {
  const [sidebar, setSidebar] = useState(true);
  const [newSubNavTitle, setNewSubNavTitle] = useState("");
  //const [newSubNavIcon, setNewSubNavIcon] = useState("");

  const handleAddSubNav = () => {
    // Create a new subNav object
    const newSubNav = {
      title: newSubNavTitle,
      icon: <IoIcons.IoIosPaper />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    };

    // Add the new subNav to the Projects section in SidebarData
    SidebarData[1].subNav.push(newSubNav); // Assuming Projects is at index 1

    // Clear the input fields
    setNewSubNavTitle("");
    // setNewSubNavIcon("");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <BrandApp></BrandApp>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            {/* Add subnav item form */}
            <div>
              <input
                type="text"
                placeholder="SubNav Title"
                value={newSubNavTitle}
                onChange={(e) => setNewSubNavTitle(e.target.value)}
              />
              {/* <input
                type="text"
                placeholder="SubNav Icon"
                value={newSubNavIcon}
                onChange={(e) => setNewSubNavIcon(e.target.value)}
              /> */}
              <button onClick={handleAddSubNav}>Add SubNav</button>
            </div>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebarr;
