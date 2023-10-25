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
  // manage campaign
  campaigns: "/campaigns",
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
  campaigns: {
    name: "campaigns",
    imgUrl: iconUrlCreateCampaign,
    path: routePaths.campaigns,
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
