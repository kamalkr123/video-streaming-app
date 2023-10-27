import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../../utils/Constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getYouTubeVideos();
  }, []);

  const getYouTubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const response = await data.json();
    console.log(response);
    setVideos(response.items);
  };

  return (
    <section className="video-container">
      {videos.map((video) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </section>
  );
};

export default VideoContainer;
