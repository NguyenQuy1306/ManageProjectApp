import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center; /* Adjusted property */
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #83838a;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center; /* Adjusted property */
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  padding-left: 2rem;
  &:hover {
    background: #83838a;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;
const DropdownLinksub = styled(Link)`
  display: flex;
  color: #e1e9fc;
  align-items: center; /* Adjusted property */
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  padding-left: 3rem;
  &:hover {
    background: #83838a;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [subsubnav, setSubsubnav] = useState([]);

  const resetState = () => {
    setSubsubnav([]);
  };

  const showSubnav = () => setSubnav(!subnav);

  const showSubsubnav = (index) => {
    const newSubsubnav = [...subsubnav]; //Mảng newSubsubnav sẽ chứa các phần tử giống với subsubnav.
    newSubsubnav[index] = !newSubsubnav[index]; //mỗi lần click vào thì set cái subitem thành đổi nghịch của nó. ban đầu mở lên thì set true
    // lúc sau tắt đi thì set false. mỗi lần check giá trị subsubnav[index] thì nó true thì xuất list kh thì tắt hoặc kh show.
    setSubsubnav(newSubsubnav); // chỗ nay set giá trị mới cho subsubnav.
  };

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={() => {
          item.subNav && showSubnav();
          resetState();
        }}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav?.map((subItem, index) => {
          return (
            <div key={index}>
              <DropdownLink
                to={`/${subItem.title.toLowerCase().replace(/\s+/g, "_")}`}
                onClick={() => {
                  subItem.subsubNav && showSubsubnav(index);
                }}
              >
                <div>
                  {subItem.icon}
                  <SidebarLabel>{subItem.title}</SidebarLabel>
                </div>
                <div>
                  {subItem.subsubNav && subsubnav[index]
                    ? subItem.iconOpened
                    : subItem.subsubNav
                    ? subItem.iconClosed
                    : null}
                </div>
              </DropdownLink>
              {subsubnav[index] &&
                subItem.subsubNav?.map((subsubItem, subIndex) => (
                  <DropdownLinksub
                    to={`/${subItem.title
                      .toLowerCase()
                      .replace(/\s+/g, "_")}/${subsubItem.title
                      .toLowerCase()
                      .replace(/\s+/g, "_")}`}
                    key={subIndex}
                  >
                    {subsubItem.icon}
                    <SidebarLabel>{subsubItem.title}</SidebarLabel>
                  </DropdownLinksub>
                ))}
            </div>
          );
        })}
    </>
  );
};

export default SubMenu;
