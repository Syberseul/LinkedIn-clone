import React, { useEffect, useState } from "react";
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
import { db } from "../server/firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__inputSearch">
          <Avatar className="feed__icon" src={user.photoUrl}>
            {user.displayName[0]}
          </Avatar>
          <div className="feed__input">
            <form>
              <input
                type="text"
                placeholder="Start a post"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
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
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
