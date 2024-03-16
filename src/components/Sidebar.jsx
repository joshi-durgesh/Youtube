import {
  BsHouseDoor,
  SiYoutubeshorts,
  MdOutlineSubscriptions,
} from "./IconComponents";
import sidebarContent from "../utils/sidebar-content.json";

const Sidebar = () => {
  return (
    <div className='pt-2 pl-2 pr-5'>
      <ul className='flex flex-col w-full border-b pb-3'>
        {sidebarContent?.[0]?.item.map((item) => {
          const ContentIcon = item.icon;
          console.log(ContentIcon);
          const name = item.name;
          return (
            <li
              key={name}
              className='text-sm font-semibold flex gap-5 px-2 py-2 rounded-sm hover:bg-neutral-200'
            >
              <ContentIcon className='inline-block text-xl' />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
