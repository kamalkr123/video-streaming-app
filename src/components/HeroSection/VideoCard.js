import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const { snippet, statistics } = video;
  return (
    <div
      className="videocard"
      onClick={() => navigate(`${"/watch?v=" + video.id}`)}
    >
      <img
        src={snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
        className="video-img"
      />
      <div className="video-title">{snippet?.title}</div>
      <p className="channel-title">{snippet?.channelTitle}</p>
      <p className="video-viewcount">{statistics?.viewCount} views </p>
    </div>
  );
};

export default VideoCard;
