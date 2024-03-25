const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(typeof statistics.viewCount);
  return (
    <div className='w-80'>
      <img
        src={thumbnails?.maxres?.url}
        alt='thumbnail'
        className='rounded-2xl mb-1'
      />
      <div className='grid grid-cols-12 px-2 justify-items-center'>
        <div className='w-9 h-9 rounded-full bg-slate-300 col-start-1 col-span-2'></div>
        <div className='col-start-3 col-span-full '>
          <div className='w-full line-clamp-2 overflow-hidden text-ellipsis font-semibold leading-5'>
            {title}
          </div>
          <div className='text-sm font-normal text-neutral-500'>
            {channelTitle}
          </div>
          <div className='text-sm text-neutral-500 font-normal'>
            {statistics.viewCount} views
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
