import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { iconUrlThirdweb, imgUrlSampleBanner, imgUrlSampleCampaign } from "../../assets";

function daysLeft(deadline) {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);
  return remainingDays.toFixed(0);
}

const mockDonators = [
  {
    name: "John Doe",
    walletAddress: "0x1234567890",
    donation: "0.1 ETH",
  },
  {
    name: "Jane Doe",
    walletAddress: "0x1234567890",
    donation: "0.1 ETH",
  },
  {
    name: "Jim Kimmel",
    walletAddress: "0x1234567890",
    donation: "0.1 ETH",
  },
];

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className="font-epilogue font-bold text-[30px] text-white p-3 bg-[#1c1c24] rounded-t-[10px] w-full text-center truncate">
        {value}
      </h4>
      <p className="font-epilogue font-normal text-[16px] text-[#808191] bg-[#28282e] px-3 py-2 w-full rouned-b-[10px] text-center">
        {title}
      </p>
    </div>
  );
};

const CampaignViewPage = () => {
  const { campaign } = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState(mockDonators);
  const remainingDays = daysLeft("2023-11-01T00:00:00.000Z");
  return (
    <div>
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img
            // TODO: change image source to state.image
            src={imgUrlSampleBanner}
            alt="campaign"
            className="w-full h-[410px] object-cover rounded-xl"
          />
        </div>
        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox
            // TODO: use state.fundGoals and fundRaised.
            title="Raised out of 80 ETH"
            value="19.3 ETH"
          />
          <CountBox
            // TODO: use length of donators
            title="Backers"
            value={11}
          />
        </div>
      </div>
      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Creator
            </h4>
            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img
                  // TODO: use user profile icon.
                  src={iconUrlThirdweb}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">
                  Your Owner Name
                  {/* TODO: use campaign owner name */}
                </h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">
                  11 Campaigns
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Story
            </h4>
            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                This is my description. This is my description. This is my
                description.
                {/* TODO: use state.description */}
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Donators
            </h4>
            <div className="mt-[20px] flex flex-col gap-4 max-w-[900px]">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex justify-between items-center gap-4 pr-5"
                  >
                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">
                      {index + 1}. {item.name}
                    </p>
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">
                      {item.donation}
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
            Fund
          </h4>
          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Fund the campaign
            </p>
            <div className="mt-[30px]">
              <input
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
                  Back it because you believe in it.
                </h4>
                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
                  Support the project for no reward, just because it speaks to
                  you.
                </p>
              </div>
              <button
                type="button"
                className={`font-epilogue text-[14px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] w-full bg-[#8c6dfd]`}
                onClick={() => {
                  console.log("DEBUG: fund campaign button clicked");
                }}
              >
                Fund Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignViewPage;
