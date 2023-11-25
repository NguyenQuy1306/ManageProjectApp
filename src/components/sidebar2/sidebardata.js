import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export const SidebarData = [
  {
    title: "Overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    path: "/Overview",
  },
  {
    title: "Goal",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    path: "/goal",
  },
  {
    title: "Profile",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    path: "/profile",
  },
  {
    title: "Projects",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Project 1",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subsubNav: [
          {
            title: "Section 1",
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: "Section 2",
            icon: <IoIcons.IoIosPaper />,
          },
        ],
      },
      {
        title: "Project 2",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subsubNav: [
          {
            title: "Section 1",
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: "Section 2",
            icon: <IoIcons.IoIosPaper />,
          },
        ],
      },
      // other subNav items...
    ],
  },
  {
    title: "Team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];

const updatePaths = (data, basePath = "") => {
  return data.map((item) => {
    const updatedItem = { ...item };
    updatedItem.path = `${basePath}/${item.title
      .toLowerCase()
      .replace(/\s+/g, "_")}`;

    if (item.subNav) {
      updatedItem.subNav = updatePaths(item.subNav, updatedItem.path);

      if (item.subNav.length > 0 && item.subNav[0].subsubNav) {
        updatedItem.subNav[0].subsubNav = updatePaths(
          item.subNav[0].subsubNav,
          updatedItem.subNav[0].path
        );
      }
    }

    return updatedItem;
  });
};

const updatedSidebarData = updatePaths(SidebarData);

localStorage.setItem("mySidebarData", JSON.stringify(updatedSidebarData));
