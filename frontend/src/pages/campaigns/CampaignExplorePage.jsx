import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import { CampaignCard } from '../../components';
import { iconUrlLoader } from '../../assets';
import { useNavigate } from 'react-router-dom';

const ExplorePageLoader = () => {
  /* TODO: UX improvement.
  1. Change loading animation using proper library. It looks like a loading animation from the 90s.
  2. Center the loader content.
  */
  return (
    <div>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        <img src={iconUrlLoader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      </div>
    </div>
  );
}

const ExplorePageDisplay = () => {
  // TODO: receive argument data and populate fields.
  const navigate = useNavigate();
  const handleNavigate = () => {
    // TODO: pass campaign context to campaign view page.
    navigate(`/campaigns/myCampaign`, { campaign: {}});
  }
  return (
    <div>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        <CampaignCard key={uuidv4()} handleClick={handleNavigate}/>
        <CampaignCard key={uuidv4()} handleClick={handleNavigate}/>
        <CampaignCard key={uuidv4()} handleClick={handleNavigate}/>
        <CampaignCard key={uuidv4()} handleClick={handleNavigate}/>
        <CampaignCard key={uuidv4()} handleClick={handleNavigate}/>
        <CampaignCard key={uuidv4()} handleClick={handleNavigate}/>
        <CampaignCard key={uuidv4()} handleClick={handleNavigate}/>
        <CampaignCard key={uuidv4()} handleClick={handleNavigate}/>
        <CampaignCard key={uuidv4()} handleClick={handleNavigate}/>
        <CampaignCard key={uuidv4()} handleClick={handleNavigate}/>
      </div>
    </div>
  );
}

const ExplorePage = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left"> Explore Ideas!</h1>
      {isLoaded ? <ExplorePageDisplay /> : <ExplorePageLoader />}
    </div>
  )
}

export default ExplorePage;
