import React from "react";
import { Avatar } from "@material-ui/core";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
