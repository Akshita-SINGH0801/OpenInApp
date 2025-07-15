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

    // Navigate to the HTTPS deep link
    window.location.href = deepLink;

    // Optional fallback after delay
    setTimeout(() => {
      if (isIOS && fallbackAppStore) {
        window.location.href = fallbackAppStore;
      } else if (isAndroid && fallbackPlayStore) {
        window.location.href = fallbackPlayStore;
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
        <button className="open-in-app-button" onClick={handleOpen}>
          {buttonText}
        </button>
      )}
    </>
  );
};

export default OpenInApp;
