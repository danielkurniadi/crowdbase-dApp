import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  localWallet,
  embeddedWallet,
  trustWallet,
  frameWallet,
  darkTheme,
} from "@thirdweb-dev/react";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    activeChain="base-goerli"
    clientId="0e25b9112d89e2ae956459e44869d831"
    supportedWallets={[
      metamaskWallet(),
      coinbaseWallet({ recommended: true }),
      localWallet(),
      embeddedWallet(),
      trustWallet(),
      frameWallet(),
    ]}
  >
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
);
