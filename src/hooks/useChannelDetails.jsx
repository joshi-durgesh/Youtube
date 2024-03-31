import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_CHANNEL_API } from "../utils/constant";

const useChannelDetails = (channelId) => {
  const [channelInfo, setChannelInfo] = useState(null);

  useEffect(() => {
    if (channelId) {
      fetchChannelDetails();
    }
  }, [channelId]);

  const fetchChannelDetails = async () => {
    // Move the fetch function inside useEffect
    try {
      const data = await fetch(
        YOUTUBE_CHANNEL_API + channelId + GOOGLE_API_KEY
      );
      const json = await data.json();
      setChannelInfo(json);
    } catch (error) {
      console.error("Error fetching channel details:", error);
    }
  };

  return channelInfo;
};

export default useChannelDetails;
