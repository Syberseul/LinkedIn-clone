import React, { useState } from "react";
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
              This is the demo version of LinkedIn Clone
            </li>
            <li className="popup_listItem">
              First you need to create an account to browse the main content
            </li>
            <li className="popup_listItem">
              After log in your account, feel free to sent a post via top text
              field says: "Start a post"
            </li>
            <li className="popup_listItem">
              This is connected to a run-time server, which means you could see
              others post as well
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
