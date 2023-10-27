import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import "./WatchPage.css";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <main className="watch-page">
      <div className="video-section">
        <div className="watch-video">
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="video"
          ></iframe>
        </div>
        <div className="chat-section">
          <LiveChat />
        </div>
      </div>
      <div className="comment-container">
        <h1 className="heading">Comments</h1>
        <CommentsContainer />
      </div>
    </main>
  );
};

export default WatchPage;
