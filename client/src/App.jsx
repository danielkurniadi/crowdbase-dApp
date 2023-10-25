import React from "react";
import { Route, Routes } from "react-router-dom";
import { SideBar, NavBar } from "./components";

import CampaignExplorePage from "./pages/campaigns/CampaignExplorePage";
import CampaignViewPage from "./pages/campaigns/CampaignViewPage";
import CampaignCreatePage from "./pages/campaigns/CampaignCreatePage";

import routeLinks from "./routes";

const RootLayout = () => {
  return (
    <div className="flex w-4/5 gap-8">
      <div className="flex-1 p-4 justify-between">
        <Routes>
          <Route
            path={routeLinks.explore.path}
            element={<CampaignExplorePage />}
          />
          <Route
            path={routeLinks.createCampaigns.path}
            element={<CampaignCreatePage />}
          />
          <Route
            path={routeLinks.viewCampaign.path}
            element={<CampaignViewPage />}
          />
          <Route
            path={routeLinks.profile.path}
            element={<div>Main Profile</div>}
          />
        </Routes>
      </div>
      {/* <div className="w-1/5 p-4"></div> */}
    </div>
  );
};

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <SideBar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1680px] mx-auto sm:pr-5">
        <NavBar />
        <div className="flex gap-8">
          <RootLayout />
        </div>
      </div>
    </div>
  );
};

export default App;
