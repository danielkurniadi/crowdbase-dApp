import {
  iconUrlCreateCampaign,
  iconUrlCrowdBaseLogo,
  iconUrlExplore,
  iconUrlLogout,
  iconUrlPayment,
  iconUrlProfile,
  iconUrlSun,
} from "./assets";

const routePaths = {
  // explore crowdfunding ideas
  explore: "/",
  // campaign
  createCampaigns: "/campaigns",
  viewCampaign: "/campaigns/:id",
  // manage payments
  payments: "/payments",
  // manage profile
  profile: "/profile",
  // logout
  logout: "/logout",
};

// TODO: tsx: Define type
const routeLinks = {
  explore: {
    name: "explore",
    imgUrl: iconUrlExplore,
    path: routePaths.explore,
  },
  createCampaigns: {
    name: "campaigns",
    imgUrl: iconUrlCreateCampaign,
    path: routePaths.createCampaigns,
  },
  viewCampaign: {
    name: "campaign",
    imgUrl: iconUrlCrowdBaseLogo,
    path: routePaths.viewCampaign,
  },
  payments: {
    name: "payment",
    imgUrl: iconUrlPayment,
    path: routePaths.payments,
  },
  profile: {
    name: "profile",
    imgUrl: iconUrlProfile,
    path: routePaths.profile,
  },
  logout: {
    name: "logout",
    imgUrl: iconUrlLogout,
    path: routePaths.logout,
  },
};

export default routeLinks;
