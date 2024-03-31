export const GOOGLE_API_KEY = "&key=AIzaSyDm5o09-10eXSvDDI3WvpYAoREsKQTImqQ";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN" +
  GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_API =
  "https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=";

export const YOUTUBE_COMMENT_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?&textFormat=plainText&part=snippet&maxResults=30&videoId=";

export const YOUTUBE_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=";
