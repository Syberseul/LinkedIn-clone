import React from "react";
import { Avatar } from "@material-ui/core";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
