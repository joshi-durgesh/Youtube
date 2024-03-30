import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  return (
    <div>
      <div>
        <div>
          <iframe
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default WatchPage;
