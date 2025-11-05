"use client";
import { useEffect, useState } from "react";
import PartnerPopup from "./ReusableComponent/PartnerPopup/PartnerPopup";

function PopupTimer() {
  const [showPopup, setShowPopup] = useState(false);
  console.log("poup timer");
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

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
