import React from "react";
import { iconUrlSearch } from "../assets";
import { ConnectWallet } from "@thirdweb-dev/react";

const NavBar = () => {
  return (
    <div className="flex sm:flex-row justify-between mt-1 mb-[35px] pr-2 gap-6">
      <div
        id="navSearchBar"
        className="flex md:flex-1 flex-row min-w-[150px] max-w-[458px] pl-4 pr-2 h-[35px] bg-[#1c1c24] rounded-[100px]"
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
        <ConnectWallet
          switchToActiveChain={true}
          modalSize={"wide"}
        />
      </div>
    </div>
  );
};

export default NavBar;
