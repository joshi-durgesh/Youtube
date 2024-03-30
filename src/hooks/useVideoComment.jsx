import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_COMMENT_API } from "../utils/constant";

const useVideoComment = (videoId) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    channelApi();
  }, []);

  const channelApi = async () => {
    const data = await fetch(YOUTUBE_COMMENT_API + videoId + GOOGLE_API_KEY);
    const json = await data.json();
    setComments(json?.items);
  };

  return comments;
};

export default useVideoComment;
