import React from "react";
import ReactDOM from "react-dom/client";
import OpenInApp from "../src/OpenInApp";  // ← this exact line

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OpenInApp
      deepLink="yourapp://home"
      fallbackPlayStore="https://play.google.com/store/apps/details?id=com.example"
      fallbackAppStore="https://apps.apple.com/app/id123456789"
    />
  </React.StrictMode>
);
