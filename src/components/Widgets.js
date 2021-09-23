import React from "react";
import "./Widgets.css";
import { Info, FiberManualRecord } from "@material-ui/icons";

function Widgets() {
  const newArticle = (heading, subtitle, shortName) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <a href={subtitle} target="_blank">
          {shortName}
        </a>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Author's News</h2>
        <Info />
      </div>
      {newArticle(
        "Airbnb Clone is Live",
        "https://airbnb-clone-syberseul.vercel.app/",
        "Redirect Link"
      )}

      {newArticle(
        "Netflix Clone is Live",
        "https://netflix-clone-yiteng.web.app/",
        "Redirect Link"
      )}

      {newArticle(
        "JB HiFi Clone is Live",
        "https://jb-hifi-clone-yiteng.web.app/",
        "Redirect Link"
      )}

      {newArticle(
        "GitHub Page",
        "https://github.com/Syberseul",
        "Go to my Github"
      )}

      {newArticle(
        "LinkedIn Page",
        "https://www.linkedin.com/in/yiteng-huang-front-end-developer/",
        "Go to my LinkedIn"
      )}

      {newArticle("More Live pages coming soon...")}
    </div>
  );
}

export default Widgets;
