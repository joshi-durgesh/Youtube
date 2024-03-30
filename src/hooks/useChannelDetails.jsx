import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_CHANNEL_API } from "../utils/constant";

const useChannelDetails = (channelId) => {
  const [channelInfo, setChannelInfo] = useState(null);
  useEffect(() => {
    channelDetails();
  }, []);

  const channelDetails = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_API + channelId + GOOGLE_API_KEY);
    const json = await data.json();
    setChannelInfo(json);
  };

  return channelInfo;
};

export default useChannelDetails;
