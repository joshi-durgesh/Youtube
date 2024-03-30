import { useSearchParams } from "react-router-dom";
import YouTube from "react-youtube";
import useVideoComment from "../hooks/useVideoComment";
import useVideoDetails from "../hooks/useVideoDetails";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const comments = useVideoComment(videoId);
  const videoInfo = useVideoDetails(videoId);
  console.log(videoInfo);

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='grid pt-[4.5rem] max-w-6xl mx-auto grid-cols-12 gap-5'>
      <div className='col-start-1 col-end-9'>
        <div className='w-full relative pb-[56.25%]'>
          <YouTube
            videoId={videoId}
            opts={opts}
            iframeClassName='absolute inset-0 w-full h-full rounded-xl'
          />
        </div>
      </div>
      <div className='col-start-9 col-span-full'>hello</div>
    </div>
  );
};

export default WatchPage;
