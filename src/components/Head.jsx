import { useDispatch, useSelector } from "react-redux";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";
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
import { toggleDarkMode, toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    console.log(searchQuery);
    getSearchSuggestions();
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    const json = await data.json();
    console.log(json[1]);
  };

  const dispatch = useDispatch();
  const darkMode = useSelector((store) => store.app.isDarkMode);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <header className='flex py-2 px-2 justify-between w-full fixed z-10 bg-white dark:bg-black dark:text-white'>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => toggleMenuHandler()}
          className='inline-block p-2 rounded-full dark:hover:bg-neutral-700 hover:bg-neutral-200'
        >
          <BsList className='text-xl' />
        </button>

        <Link to={"/"}>
          <img
            src={darkMode ? logoDark : logoLight}
            alt='youtube logo'
            className='w-[88px] cursor-pointer'
          />
        </Link>
      </div>
      <div className='flex gap-4'>
        <div className='flex items-center'>
          <input
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='border p-[0.28rem] pl-4 rounded-l-full  w-[30rem] focus:outline-none focus:border-blue-500 focus:shadow-inner-custom dark:bg-neutral-900 dark:focus:border-blue-500 dark:border-neutral-500'
          />
          <button className='hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-50 px-6 py-[0.4rem] rounded-r-full border border-l-0 dark:border-neutral-500'>
            <IoIosSearch className='text-xl' />
          </button>
        </div>
        <button className='inline-block p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-neutral-200'>
          <MdOutlineMic className='text-xl' />
        </button>
      </div>
      <div className='flex gap-4'>
        <button className='inline-block p-2 rounded-full dark:hover:bg-neutral-700 hover:bg-neutral-200'>
          <RiVideoAddLine className='text-xl' />
        </button>
        <button className='inline-block p-2 rounded-full dark:hover:bg-neutral-700 hover:bg-neutral-200'>
          <CgBell className='text-xl' />
        </button>
        <button className='inline-block p-2 rounded-full  dark:bg-neutral-700 bg-neutral-100'>
          <LuUser2 className='text-xl' />
        </button>
        <button
          onClick={() => toggleDarkModeHandler()}
          className='inline-block p-2 rounded-full  hover:bg-neutral-200 dark:text-white  dark:hover:bg-neutral-700'
        >
          {darkMode ? (
            <FiSun className='text-xl' />
          ) : (
            <FiMoon className='text-xl' />
          )}
        </button>
      </div>
    </header>
  );
};

export default Head;
