import useMultiVideosDetails from "../hooks/useMultiVideosDetails";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videoData = useMultiVideosDetails();

  return (
    <div className='flex flex-wrap gap-4 relative pt-14 overflow-x-hidden '>
      {videoData.map((data) => {
        return (
          <Link to={"/watch?v=" + data?.id} key={data.id}>
            <VideoCard info={data} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
