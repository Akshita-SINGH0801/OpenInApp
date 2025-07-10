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

    // Try to open deep link immediately
    window.location.href = deepLink;

    // Wait, then fallback to store link
    setTimeout(() => {
      const fallbackUrl = isIOS ? fallbackAppStore : fallbackPlayStore;
      if (fallbackUrl) {
        window.location.href = fallbackUrl;   // ✅ Use href for native app handoff
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
