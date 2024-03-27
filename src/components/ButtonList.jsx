import { useState } from "react";

const btnList = ["All", "Gaming", "Live", "Music", "Valorant", "React", "Food"];
const ButtonList = () => {
  const [btnChecked, setBtnChecked] = useState(0);
  const handleButtonClick = (index) => {
    setBtnChecked(index);
  };
  return (
    <div className='pt-4 pb-4 w-full flex gap-2 fixed z-10 bg-white dark:bg-black'>
      {btnList.map((item, index) => {
        return (
          <span key={item}>
            <input
              type='radio'
              name='filter'
              id={item}
              className='hidden'
              checked={btnChecked === index}
              onChange={() => handleButtonClick(index)}
            />
            <label
              htmlFor={item}
              onClick={() => {
                handleButtonClick(index);
              }}
              id={item}
              className={
                "cursor-pointer px-3 py-1 dark:text-neutral-50 rounded-md " +
                (btnChecked === index
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                  : "bg-neutral-200 dark:bg-neutral-800")
              }
            >
              {item}
            </label>
          </span>
        );
      })}
    </div>
  );
};

export default ButtonList;
