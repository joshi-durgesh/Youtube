import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className='flex w-[100vw]'>
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
