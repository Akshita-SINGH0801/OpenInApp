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
    } 
   else if (isAndroid) {
  const [schemePart, pathPartRaw] = deepLink.split('://');
  const pathPart = pathPartRaw || '';
  let intentUrl = `intent://${pathPart}#Intent;scheme=${schemePart};package=${androidPackage}`;
  if (fallbackPlayStore) {
    const fallbackParam = `;S.browser_fallback_url=${encodeURIComponent(fallbackPlayStore)}`;
    intentUrl += fallbackParam;
  }
  intentUrl += ';end;';
  window.location.href = intentUrl;
}
    else {
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
