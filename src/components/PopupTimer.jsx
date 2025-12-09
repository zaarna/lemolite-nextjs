"use client";
import { createContext, useContext, useEffect, useState } from "react";
import PartnerPopup from "./ReusableComponent/PartnerPopup/PartnerPopup";

const PopupContext = createContext();

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within PopupTimer");
  }
  return context;
};

function PopupTimer({ children }) {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);

  useEffect(() => {
    if (!hasShownOnce) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setHasShownOnce(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [hasShownOnce]);
  const closePopup = () => {
    setShowPopup(false);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <PopupContext.Provider value={{ showPopup, openPopup, closePopup }}>
      {children}
      {showPopup && <PartnerPopup isPopupOpen={true} closePopup={closePopup} />}
    </PopupContext.Provider>
  );
}

export default PopupTimer;
