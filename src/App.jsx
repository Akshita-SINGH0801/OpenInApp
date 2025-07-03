import React from "react";
import OpenInApp from "./OpenInApp";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Open In App Demo</h1>
      <OpenInApp
        deepLink="yourapp://home"
        fallbackPlayStore="https://play.google.com/store/apps/details?id=com.example"
        fallbackAppStore="https://apps.apple.com/app/id123456789"
      />
    </div>
  );
}

export default App;
