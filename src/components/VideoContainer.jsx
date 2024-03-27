import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    const filterData = json?.items.filter((data) => {
      return data.snippet.thumbnails.maxres;
    });
    setVideoData(filterData);
  };
  return (
    <div className='flex flex-wrap gap-4 relative pt-14 overflow-x-hidden '>
      {videoData.map((data) => {
        return (
          <Link to={"/watch?v=" + data?.id} key={data.id}>
            <VideoCard info={data} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
