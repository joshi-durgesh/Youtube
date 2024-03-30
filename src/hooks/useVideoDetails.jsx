import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_API } from "../utils/constant";

const useVideoDetails = (videoId) => {
  const [videoInfo, setVideoInfo] = useState(null);
  useEffect(() => {
    videoDetails();
  }, []);
  const videoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API + videoId + GOOGLE_API_KEY);
    const json = await data.json();
    setVideoInfo(json);
  };

  return videoInfo?.items?.[0];
};

export default useVideoDetails;
