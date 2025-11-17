"use client";
import { useEffect, useState } from "react";
import PartnerPopup from "./ReusableComponent/PartnerPopup/PartnerPopup";

function PopupTimer() {
  const [showPopup, setShowPopup] = useState(false);
  ("poup timer");
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <PartnerPopup isPopupOpen={true} closePopup={closePopup} />}
    </>
  );
}

export default PopupTimer;
