import React, { useEffect } from "react";

const OpenInApp = ({
  deepLink = "",
  fallbackPlayStore = "",
  fallbackAppStore = "",
  delay = 2500,
  autoRedirect = false,
  buttonText = "Open in App",
  androidPackage = "com.olx.southasia", 
}) => {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);

  const handleOpen = () => {
    if (!deepLink) return;

    if (isIOS) {
      // iOS: direct deeplink with timeout fallback
      window.location.href = deepLink;
      setTimeout(() => {
        if (fallbackAppStore) {
          window.location.href = fallbackAppStore;
        }
      }, delay);

    } else if (isAndroid) {
      // Android: intent:// with browser fallback to Play Store
      setTimeout(() => {
        const path = deepLink.replace(/.*?:\/\//, '');
        const scheme = deepLink.split(':')[0];
        const encodedFallback = fallbackPlayStore ? encodeURIComponent(fallbackPlayStore) : '';
        const intentUrl = `intent://${path}#Intent;scheme=${scheme};package=${androidPackage}${encodedFallback ? `;S.browser_fallback_url=${encodedFallback}` : ''};end;`;

        window.location.href = intentUrl;
      }, delay);

    } else {
      // Fallback for other platforms
      window.location.href = fallbackPlayStore || fallbackAppStore || '/';
    }
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
