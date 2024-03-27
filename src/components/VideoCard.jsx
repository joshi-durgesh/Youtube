import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!info) return;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, channelId } = snippet;

  const view = parseInt(statistics?.viewCount);
  let views;
  if (view > 1000000) {
    views = `${(view / 1000000).toFixed(2)}M`;
  } else if (view > 1000) {
    views = `${(view / 1000).toFixed(2)}K`;
  } else {
    views = view;
  }

  return (
    <div className={"cursor-pointer " + (isMenuOpen ? "w-96" : "w-[19rem]")}>
      <img
        src={thumbnails?.maxres?.url}
        alt='thumbnail'
        className='rounded-2xl mb-1 '
      />
      <div className='grid grid-cols-12 px-2 justify-items-center'>
        <div className='w-9 h-9 rounded-full bg-slate-300 dark:bg-slate-600 col-start-1 col-span-2'></div>
        <div className='col-start-3 col-span-full '>
          <div className='w-full line-clamp-2 dark:text-white  overflow-hidden text-ellipsis font-semibold leading-5'>
            {title}
          </div>
          <div className='text-sm font-normal text-neutral-500 dark:text-neutral-300'>
            {channelTitle}
          </div>
          <div className='text-sm text-neutral-500 dark:text-neutral-400 font-normal'>
            {views} views
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
