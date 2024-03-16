import { useDispatch } from "react-redux";
import logoLight from "../assets/logo-light.png";
import {
  BsList,
  IoIosSearch,
  MdOutlineMic,
  RiVideoAddLine,
  CgBell,
  LuUser2,
  FiSun,
  FiMoon,
} from "./IconComponents";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className='flex my-1 mx-2 justify-between'>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => toggleMenuHandler()}
          className='inline-block p-2 rounded-full hover:bg-neutral-200'
        >
          <BsList className='text-xl' />
        </button>

        <img src={logoLight} alt='youtube logo' className='w-[88px]' />
      </div>
      <div className='flex gap-4'>
        <div className='flex items-center'>
          <input
            type='text'
            placeholder='
            Search'
            className='border p-[0.28rem] pl-4 rounded-l-full  w-[30rem] focus:outline-none focus:border-blue-500 focus:shadow-inner-custom'
          />
          <button className='hover:bg-neutral-100 bg-neutral-50 px-6 py-[0.4rem] rounded-r-full border border-l-0'>
            <IoIosSearch className='text-xl' />
          </button>
        </div>
        <button className='inline-block p-2 rounded-full bg-neutral-100 hover:bg-neutral-200'>
          <MdOutlineMic className='text-xl' />
        </button>
      </div>
      <div className='flex gap-4'>
        <button className='inline-block p-2 rounded-full  hover:bg-neutral-200'>
          <RiVideoAddLine className='text-xl' />
        </button>
        <button className='inline-block p-2 rounded-full  hover:bg-neutral-200'>
          <CgBell className='text-xl' />
        </button>
        <button className='inline-block p-2 rounded-full  bg-neutral-100'>
          <LuUser2 className='text-xl' />
        </button>
        <button className='inline-block p-2 rounded-full  hover:bg-neutral-200'>
          {/* <FiSun className='text-xl' /> */}
          <FiMoon className='text-xl' />
        </button>
      </div>
    </header>
  );
};

export default Head;
