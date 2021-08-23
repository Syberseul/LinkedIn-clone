import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://i.pinimg.com/originals/ca/45/b8/ca45b8e64347b04ae81ed77cd0442f50.jpg"
          alt="sidebar background"
        />
        <Avatar className="sidebar__avatar" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">47</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">27</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("Programming")}
        {recentItem("Internship")}
      </div>
    </div>
  );
}

export default Sidebar;
