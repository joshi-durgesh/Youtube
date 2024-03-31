import { useSearchParams } from "react-router-dom";
import YouTube from "react-youtube";
import useVideoComment from "../hooks/useVideoComment";
import useVideoDetails from "../hooks/useVideoDetails";
import useChannelDetails from "../hooks/useChannelDetails";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const comments = useVideoComment(videoId);
  const videoInfo = useVideoDetails(videoId);
  const channelInfo = useChannelDetails(videoInfo?.snippet.channelId);

  if (!videoInfo || !channelInfo) return null;
  const { channelId, channelTitle, title } = videoInfo?.snippet;
  console.log(channelInfo);
  const { snippet, statistics } = channelInfo?.items?.[0];
  const { url } = snippet?.thumbnails?.default;
  const { subscriberCount } = statistics;

  const subscribers = parseInt(subscriberCount);
  let subscriberTotal;
  if (subscribers > 1000000) {
    subscriberTotal = `${(subscribers / 1000000).toFixed(2)}M`;
  } else if (subscribers > 1000) {
    subscriberTotal = `${(subscribers / 1000).toFixed(2)}K`;
  } else {
    subscriberTotal = subscribers;
  }

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='grid pt-[4.5rem] max-w-7xl mx-auto grid-cols-12 gap-5'>
      <div className='col-start-1 col-end-9'>
        <div className='w-full relative pb-[56.25%]'>
          <YouTube
            videoId={videoId}
            opts={opts}
            iframeClassName='absolute inset-0 w-full h-full rounded-xl'
          />
        </div>
        <div className='px-2 pt-2'>
          <h2 className='font-bold pb-1 dark:text-white'>{title}</h2>
          <div>
            <div className='flex gap-2 items-center'>
              <img src={url} className='w-10 h-10 rounded-full' />
              <div className='flex flex-col'>
                <span className='font-semibold dark:text-white'>
                  {channelTitle}
                </span>
                <span className='text-[0.72rem] font-semibold dark:text-zinc-400   text-zinc-500'>
                  {subscriberTotal} subscribers
                </span>
              </div>
              <button className='bg-black text-white py-1 px-3 rounded-2xl ml-3'>
                subscribe
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className='col-start-9 col-span-full'>hello</div>
    </div>
  );
};

export default WatchPage;
