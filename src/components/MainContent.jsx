import Head from "./Head";
import Body from "./Body";
import WatchPage from "./WatchPage";
import { useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const MainContent = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/watch",
      element: <WatchPage />,
    },
  ]);
  const darkMode = useSelector((store) => store.app.isDarkMode);
  return (
    <div className={darkMode ? "dark" : null}>
      <div className='dark:bg-black  h-[100vh] relative'>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
};

export default MainContent;
