import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";

const useMultiVideosDetails = () => {
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

  return videoData;
};

export default useMultiVideosDetails;
