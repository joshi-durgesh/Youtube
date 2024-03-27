import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={"px-3 relative " + (isMenuOpen ? " left-44" : " left-[5rem]")}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
