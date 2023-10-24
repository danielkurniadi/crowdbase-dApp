import React from 'react';
import { Route, Routes } from "react-router-dom";
import { SideBar, NavBar } from './components';
import routeLinks from './routes';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <SideBar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <NavBar />
        <Routes>
          <Route path={routeLinks.explore.path} element={<div>Explore</div>} />
          <Route path={routeLinks.profile.path} element={<div>Profile</div>} />
          <Route path={routeLinks.campaigns.path} element={<div>Create Campaigns</div>} />
          <Route path={routeLinks.campaigns.path + "/:id"} element={<div>Campaign Details</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
