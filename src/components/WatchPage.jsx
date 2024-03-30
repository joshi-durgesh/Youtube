import { useSearchParams } from "react-router-dom";
import YouTube from "react-youtube";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
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
            videoId={searchParams.get("v")}
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
