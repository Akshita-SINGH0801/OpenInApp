import React from "react";
import OpenInApp from "./OpenInApp";
import './style.css';

function App() {
  return (
    <div className="app-container">
      <h1>Open In App Demo</h1>
      <OpenInApp
        deepLink="olx://"
        fallbackPlayStore="https://play.google.com/store/apps/details?id=com.olx.southasia"
        fallbackAppStore="https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792"
        delay={1000}
        autoRedirect={false}
        buttonText="Open In App"
      />
    </div>
  );
}

export default App;
