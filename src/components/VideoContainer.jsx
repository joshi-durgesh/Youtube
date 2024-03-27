import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideoData(json?.items);
  };
  return (
    <div className='flex flex-wrap gap-4 relative pt-14 scrollbar-none dark:bg-black '>
      {videoData.map((data) => {
        return <VideoCard key={data.id} info={data} />;
      })}
    </div>
  );
};

export default VideoContainer;
