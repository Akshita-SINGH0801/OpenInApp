import React from "react";
import OpenInApp from "./OpenInApp";
import "./style.css";

function App() {
  return (
    <div className="app-container">
      <h1>Open In App</h1>
      <OpenInApp
        deepLink="https://www.olx.in/"
        fallbackPlayStore="https://play.google.com/store/apps/details?id=com.olx.southasia"
        fallbackAppStore="https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792"
        delay={2500}
        autoRedirect={false}
        buttonText="Open in OLX App"
      />
    </div>
  );
}

export default App;
