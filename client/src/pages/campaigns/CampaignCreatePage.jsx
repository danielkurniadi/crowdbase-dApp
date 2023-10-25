import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { CampaignForm, Loader } from "../../components";

const CampaignCreatePage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(true);
  const handleCreateCampaign = () => {
    // TODO: pass campaign context to campaign view page
    setIsLoaded(false);
    console.log("mock await createCampaign:", form);
    setIsLoaded(true);
    navigate("/campaigns/myCampaign", { campaign: {} });
  };
  const handleSubmit = async () => {
    const img = new Image();
    img.src = form.image;
    if (img.complete) {
      handleCreateCampaign();
    }
    img.onload = handleCreateCampaign();
    img.onerror = () => {
      alert("Image URL is invalid");
      setForm({ ...form, image: "" });
    };
  };
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {!isLoaded && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign
        </h1>
      </div>
      <CampaignForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default CampaignCreatePage;
