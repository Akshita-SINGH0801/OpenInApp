import React, { useEffect } from "react";

const OpenInApp = ({
  deepLink = "",
  fallbackPlayStore = "",
  fallbackAppStore = "",
  delay = 2500,
  autoRedirect = false,
  buttonText = "Open in App",
}) => {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);

  const handleOpen = () => {
    if (!deepLink) return;

    // Step 1: Try to open the app
    window.location.href = deepLink;

    // Step 2: If not installed, fallback to Play Store or App Store app
    setTimeout(() => {
      const fallbackUrl = isIOS ? fallbackAppStore : fallbackPlayStore;
      if (fallbackUrl) {
        window.location.href = fallbackUrl; // ✅ App fallback, opens Play Store app
      }
    }, delay);
  };

  useEffect(() => {
    if (autoRedirect) {
      handleOpen();
    }
  }, [autoRedirect]);

  return (
    <>
      {!autoRedirect && (
        <button onClick={handleOpen}>
          {buttonText}
        </button>
      )}
    </>
  );
};

export default OpenInApp;
