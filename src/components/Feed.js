import React, { useState } from "react";
import InputOption from "./InputOption";
import { Avatar } from "@material-ui/core";
import {
  Image,
  Subscriptions,
  EventNote,
  CalendarViewDay,
} from "@material-ui/icons";
import "./Feed.css";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__inputSearch">
          <Avatar
            className="feed__icon"
            src={`https://media-exp1.licdn.com/dms/image/D5635AQH2rPSmF5mILA/profile-framedphoto-shrink_100_100/0/1626063680389?e=1628913600&v=beta&t=sj4QG86HjzILaG307ZsTQG5jXy7iMvAyLu5uX-Qyjk8`}
          />
          <div className="feed__input">
            <form>
              <input type="text" placeholder="Start a post" />
              <button type="submit" onClick={sendPost}>
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70c8ff" />
          <InputOption Icon={Subscriptions} title="Video" color="#70bd64" />
          <InputOption Icon={EventNote} title="Event" color="#e7a33e" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#ff9ed2"
          />
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => {
        <Post />;
      })}
      <Post
        name="Yiteng Huang"
        description="This is a test"
        message="You should see this message after description"
      />
      <Post
        name="Yuhang Gao"
        description="This is another test"
        message="You are amazing!"
      />
    </div>
  );
}

export default Feed;
