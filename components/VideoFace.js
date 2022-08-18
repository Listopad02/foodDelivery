import VideoPlayer from "react-background-video-player";
import { useState, useEffect } from "react";

function VideoFace({ num }) {
  const [reload, serReload] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      serReload(reload + 1);
    });
  }, []);

  const handleLoad = () => {
    alert("ds");
  };

  return (
    <VideoPlayer
      className="video"
      src={`https://xn--80aamqmn7eb2e.xn--p1ai/video/video${num}.mp4`}
      autoPlay={true}
      muted={true}
      preload={handleLoad}
    />
  );
}

export default VideoFace;
