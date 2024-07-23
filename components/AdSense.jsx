// src/components/AdSense.js
import React, { useEffect } from "react";

const AdSense = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8233994516735568";
    script.async = true;
    script.crossOrigin = "anonymous";
    
    // Append the script to the document body
    document.body.appendChild(script);

    // Initialize the ad after the script is loaded
    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    // Cleanup script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "block" }}
         data-ad-client="ca-pub-8233994516735568"
         data-ad-slot="5010797560"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
};

export default AdSense;
