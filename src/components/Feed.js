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

function Feed() {
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
      name: "Yiteng",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
