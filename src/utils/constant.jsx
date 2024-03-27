const GOOGLE_API_KEY = "AIzaSyDm5o09-10eXSvDDI3WvpYAoREsKQTImqQ";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_API =
  "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id={YOUR_CHANNEL_ID}&key={YOUR_API_KEY}";
