import React from "react";
import { useParams } from "react-router";
import VideoPlayer from "../components/VideoPlayer";

const VideoPage: React.FC = () => {
  const { "*": path = "" } = useParams();

  return (
    <div className="flex justify-center items-center p-2 w-screen h-screen">
      <VideoPlayer src={path} />
    </div>
  );
};

export default VideoPage;
