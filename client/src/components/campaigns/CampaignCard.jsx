import React from "react";

import { tagType, iconUrlThirdweb, imgUrlSampleCampaign } from "../../assets";

const CampaignStatusBox = ({ boxTitle = "", boxSubtitle = "" }) => {
  return (
    <div className="flex flex-col">
      <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
        {boxTitle}
      </h4>
      <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
        {boxSubtitle}
      </p>
    </div>
  );
};

export const CampaignCard = () => {
  return (
    <div
      className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer"
      onClick={()=>{
        // TODO:
      }}
    >
      <img
        src={imgUrlSampleCampaign}
        alt="fund"
        className="w-full h-[158px] object-cover rounded-[15px]"
      />
      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <img
            src={tagType}
            alt="tag"
            className="w-[17px] h-[17px] object-contain"
          />
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
            Education
          </p>
        </div>
        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
            This is my title of my project
          </h3>
          <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">
            This is my description.
          </p>
        </div>
        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <CampaignStatusBox boxTitle="19.3 ETH" boxSubtitle="Raised of 80 ETH" />
          <CampaignStatusBox boxTitle="80" boxSubtitle="Days Left" />
          <CampaignStatusBox boxTitle="Series C" boxSubtitle="Funding stage" />
        </div>
        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img
              src={iconUrlThirdweb}
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">
            by
            <span className="text-[#b2b3bd]">Daniel Kurniadi</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
