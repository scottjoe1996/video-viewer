import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <ReactPlayer src={src} controls={true} width="100%" height="100%" />
    </div>
  );
};

export default VideoPlayer;
