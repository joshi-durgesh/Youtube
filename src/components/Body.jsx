import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className='flex relative top-12 dark:bg-[#0f0f0f] w-full overflow-x-hidden '>
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
