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
  explore: "/", // explore crowdfunding ideas
  campaigns: "/campaigns", // manage campaign
  payments: "/payments", // manage payments
  profile: "/profile", // manage profile
  logout: "/logout", // logout
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
    link: routePaths.payments,
  },
  profile: {
    name: "profile",
    imgUrl: iconUrlProfile,
    link: "/profile",
  },
  logout: {
    name: "logout",
    imgUrl: iconUrlLogout,
    link: "/logout",
  },
};

export default routeLinks;
