import Head from "./Head";
import Body from "./Body";
import { useSelector } from "react-redux";

const MainContent = () => {
  const darkMode = useSelector((store) => store.app.isDarkMode);
  return (
    <div className={darkMode ? "dark" : null}>
      <div className='dark:bg-black  h-[100vh]'>
        <Head />
        <Body />
      </div>
    </div>
  );
};

export default MainContent;
