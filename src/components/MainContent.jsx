import Head from "./Head";
import Body from "./Body";
import WatchPage from "./WatchPage";
import { useSelector } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Head />
      <Outlet />
    </>
  );
};

const MainContent = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Content />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  const darkMode = useSelector((store) => store.app.isDarkMode);
  return (
    <div className={darkMode ? "dark" : null}>
      <div className='dark:bg-black  h-[100vh] relative'>
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
};

export default MainContent;
