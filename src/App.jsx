import React from "react";
import OpenInApp from "./OpenInApp";
import './style.css';

function App() {
  return (
    <div className="app-container">
      <h1>Open In App Demo</h1>
      <OpenInApp
        deepLink="intent://home#Intent;scheme=OLX;package=com.example;end"
        fallbackPlayStore="https://play.google.com/store/apps/details?id=com.olx.southasia&hl=en_IN"
        fallbackAppStore="https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792"
        autoRedirect={true}
      />
    </div>
  );
}

export default App;
