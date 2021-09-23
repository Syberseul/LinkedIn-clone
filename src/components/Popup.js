import React, { useState, useEffect } from "react";
import "./Popup.css";

function Popup() {
  const [popup, setPopup] = useState(true);
  const handleCloseBtn = () => {
    setPopup(false);
  };

  if (popup) {
    return (
      <div className="popup">
        <div className="popup_container">
          <p className="popup_title">Instruction:</p>
          <ul className="popup_list">
            <li className="popup_listItem">
              This is the demo version of Netflix Clone
            </li>
            <li className="popup_listItem">
              First you need to create an account to browse the main content
            </li>
            <li className="popup_listItem">
              Once You've done the registration, feel free to click any movie
              image and see details about that
            </li>
            <li className="popup_listItem">
              Click the thumbnail on top right corner and try to subscribe
              different plans - fake payment process implemented
            </li>
          </ul>
          <button className="popup_btn" onClick={() => handleCloseBtn()}>
            Yes, I got it!
          </button>
        </div>
      </div>
    );
  }
  return null;
}

export default Popup;
