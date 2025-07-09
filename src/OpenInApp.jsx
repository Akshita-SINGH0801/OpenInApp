import React, { useEffect } from "react";

const OpenInApp = ({
  deepLink,
  fallbackPlayStore,
  fallbackAppStore,
  delay = 2000,
  autoRedirect = false,
  buttonText = "Open in App",
}) => {
  console.log("OpenInApp loaded");
  console.log("deepLink:", deepLink);
  console.log("fallbackPlayStore:", fallbackPlayStore);
  console.log("fallbackAppStore:", fallbackAppStore);

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);

  const handleOpen = () => {
  if (!deepLink || typeof window === "undefined") return;

  const now = Date.now();
  window.location.href = deepLink;

  setTimeout(() => {
    const fallbackUrl = isIOS ? fallbackAppStore : fallbackPlayStore;
    if (Date.now() - now >= delay && fallbackUrl) {
      window.open(fallbackUrl, "_blank", "noopener,noreferrer");
    }
  }, delay);
};


  useEffect(() => {
  if (autoRedirect && typeof window !== "undefined") {
    handleOpen();
  }
}, []);


  return !autoRedirect ? (
    <button onClick={handleOpen}>{buttonText}</button>
  ) : null;
};

export default OpenInApp;
