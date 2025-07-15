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
      
      window.location.href = deepLink;
      setTimeout(() => {
        if (fallbackAppStore) {
          window.location.href = fallbackAppStore;
        }
      }, delay);
    } else if (isAndroid) {
      
      window.location.href = deepLink;

      setTimeout(() => {
        
        const path = deepLink.replace(/.*?:\/\//, '');
        const scheme = deepLink.split(':')[0];
        const intentUrl = `intent://${path}#Intent;scheme=${scheme};package=${androidPackage};end;`;

        if (fallbackPlayStore) {
          window.location.href = fallbackPlayStore;
        } else {
          window.location.href = intentUrl;
        }
      }, delay);
    } else {
      
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
