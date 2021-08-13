import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
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
          alt="sidebar background image"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Yiteng Huang</h2>
        <h4>yteng.huang@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,234</p>
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
