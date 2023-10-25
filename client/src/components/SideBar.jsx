import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routeLinks from "../routes";
import { iconUrlCrowdBaseLogo, iconUrlSun } from "../assets";

const SideBarIcon = ({
  imgUrl,
  handleClick = () => {},
  styles = "",
  isActive = false,
}) => {
  // Highlight the active icon
  const backgroundColor = isActive && "bg-[#2c2f32]";
  return (
    <div
      className={`w-[48px] h-[48px] rounded-[10px] ${backgroundColor} hover:bg-[#2c2f32] flex justify-center items-center ${styles}`}
      onClick={handleClick}
    >
      <img
        src={imgUrl}
        alt={`${isActive ? "active" : "inactive"} icon}`}
        // Grayscale the inactive icons. By default, icons image are green.
        className={`w-1/2 h-1/2 ${!isActive && "grayscale"}`}
      />
    </div>
  );
};

const SideBar = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(routeLinks.explore.name);
  const navLinks = [
    // NOTE: this is the order of the icons in the sidebar
    routeLinks.explore,
    routeLinks.campaigns,
    routeLinks.profile,
  ];
  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to={routeLinks.explore.path}>
        <SideBarIcon
          styles="w-[52px] h-[52px] bg-[#2c2f32]"
          isActive={true}
          imgUrl={iconUrlCrowdBaseLogo}
        />
      </Link>
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navLinks.map((link) => (
            <SideBarIcon
              imgUrl={link.imgUrl}
              isActive={activeLink === link.name}
              handleClick={() => {
                setActiveLink(link.name);
                navigate(link.path);
              }}
            />
          ))}
        </div>
        <SideBarIcon styles="bg-[#1c1c24]" imgUrl={iconUrlSun} />
      </div>
    </div>
  );
};

export default SideBar;
