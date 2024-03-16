import sidebarContent from "../utils/sidebarContent";

const Sidebar = () => {
  return (
    <div className=' pl-2 pr-2 h-[93vh] overflow-hidden hover:overflow-auto '>
      {sidebarContent.map((data) => {
        return (
          <ul className='flex flex-col w-full border-b pb-3 pt-3'>
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
