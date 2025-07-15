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
      // iOS: direct deeplink + timeout fallback
      window.location.href = deepLink;
      setTimeout(() => {
        if (fallbackAppStore) {
          window.location.href = fallbackAppStore;
        }
      }, delay);

    } else if (isAndroid) {
      // Android: First try direct deeplink
      window.location.href = deepLink;

      setTimeout(() => {
        // After delay, try intent:// with fallback
        const path = deepLink.replace(/.*?:\/\//, '');
        const scheme = deepLink.split(':')[0];
        let intentUrl = `intent://${path}#Intent;scheme=${scheme};package=${androidPackage}`;
        
        if (fallbackPlayStore) {
          intentUrl += `;S.browser_fallback_url=${encodeURIComponent(fallbackPlayStore)}`;
        }
        
        intentUrl += ';end;';
        
        window.location.href = intentUrl;
      }, delay);

    } else {
      // Other devices
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
