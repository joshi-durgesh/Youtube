import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className='flex relative top-12'>
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
