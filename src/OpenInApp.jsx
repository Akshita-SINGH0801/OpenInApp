import React, { useEffect } from "react";

const OpenInApp = ({
  deepLink,
  fallbackPlayStore,
  fallbackAppStore,
  delay = 2000,
  autoRedirect = false,
  buttonText = "Open in App",
}) => {
    
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);

  const handleOpen = () => {
    const now = Date.now();
    window.location.href = deepLink;

    setTimeout(() => {
      const fallbackUrl = isIOS ? fallbackAppStore : fallbackPlayStore;
      if (Date.now() - now >= delay && fallbackUrl) {
        window.location.href = fallbackUrl;
      }
    }, delay);
  };

  useEffect(() => {
    if (autoRedirect) {
      handleOpen();
    }
  }, []);

  return !autoRedirect ? (
    <button onClick={handleOpen}>{buttonText}</button>
  ) : null;
};

export default OpenInApp;
