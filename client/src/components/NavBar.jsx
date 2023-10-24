import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  iconUrlSearch,
  iconUrlThirdweb,
} from "../assets";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  embeddedWallet,
  trustWallet,
  frameWallet,
  darkTheme,
} from "@thirdweb-dev/react";
import CustomButton from "./CustomButton";
import routeLinks from "../routes";

const NavBarSmallScreenIcon = ({
  name,
  imgUrl,
  handleClick = () => {},
  isActive = false,
  styles = "",
}) => {
  const backgroundColor = isActive ? "bg-[#2c2f32]" : "";
  const grayscale = isActive ? "grayscale-0" : "grayscale";
  const textColor = isActive ? "text-[#1dc071]" : "text-[#808191]";
  <li
    key={name}
    className={`flex p-4 ${backgroundColor} ${styles}`}
    onClick={handleClick}
  >
    <img
      src={imgUrl}
      alt={name}
      className={`w-[24px] h-[24px] object-contain ${grayscale}`}
    />
    <p
      className={`ml-[2opx] font-epilogue font-semibold text-[14px] ${textColor}`}
    >
      {name}
    </p>
  </li>;
};

const NavBar = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(routeLinks.explore.name);
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const navLinks = [
    // NOTE: this is the order of the icons in the sidebar
    routeLinks.explore,
    routeLinks.campaigns,
    routeLinks.payments,
    routeLinks.profile,
  ];

  return (
    <div className="flex sm:flex-row justify-between mb-[35px] gap-6">
      <div
        id="navSearchBar"
        className="flex md:flex-1 flex-row min-w-[150px] max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]"
      >
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />
        <div className="w-[72px] h-full rounded-[200px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <img
            src={iconUrlSearch}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>
      <div className="flex flex-row justify-end gap-4">
        <CustomButton
          type="button"
          title="Start your campaign"
          styles="w-[200px] bg-[#4acd8d] text-[16px] mr-4"
          handleClick={() => navigate(routeLinks.campaigns.path)}
        />
        {/* TODO P2: Remove profile and redesign navbar */}
        <Link to={routeLinks.profile.path}>
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32]">
            <img
              src={iconUrlThirdweb}
              className="w-[80%] h-[80%] object-contain"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
