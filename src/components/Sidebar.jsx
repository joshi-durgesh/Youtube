import { useSelector } from "react-redux";
import { sidebarContent, sidebarContent2 } from "../utils/sidebarContent";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen)
    return (
      <div className=' pr-2 '>
        <ul className='flex flex-col gap-6 pt-6'>
          {sidebarContent2.item.map((data) => {
            return (
              <li className='flex flex-col gap-1 items-center px-1 py-3 rounded-lg hover:bg-neutral-200 '>
                <data.icon className='text-xl' />
                <span className='text-[9px]'>{data.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );

  return (
    <div className=' pl-2 pr-2 h-[93vh] overflow-hidden hover:overflow-auto '>
      {sidebarContent.map((data) => {
        return (
          <ul key={data.id} className='flex flex-col w-full border-b pb-3 pt-3'>
            {data?.item.map((item) => {
              const ContentIcon = item.icon;
              const name = item.name;
              return (
                <li
                  key={name}
                  className='text-sm  flex gap-5 px-2 py-2 rounded-lg hover:bg-neutral-200'
                >
                  <ContentIcon className='inline-block text-xl' />
                  <span>{name}</span>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default Sidebar;
