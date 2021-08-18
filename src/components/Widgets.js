import React from "react";
import "./Widgets.css";
import { Info, FiberManualRecord } from "@material-ui/icons";

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
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
        "This is the first article",
        "See what's going on via my Github page"
      )}

      {newArticle(
        "I also have other clone websites",
        "Go and check my Github page"
      )}
    </div>
  );
}

export default Widgets;
