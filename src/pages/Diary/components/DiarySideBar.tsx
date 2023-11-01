import { useState } from 'react';
import { DiaryContent } from '~/pages/Diary/components/DiaryContent';
import DiaryMain from '~/pages/Diary/components/DiaryMain/DiaryMain';

const DiarySideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`absolute bottom-28 z-30 flex h-[23rem] w-full justify-center bg-base-white p-7 shadow-[0rem_-0.15rem_0.15rem_0rem_rgba(0,0,0,0.25)] transition-all duration-300 lg:bottom-0 lg:left-28 lg:h-screen lg:w-[23rem] lg:shadow-[0.15rem_0.15rem_0.15rem_0rem_rgba(0,0,0,0.25)] ${
        isOpen
          ? 'translate-y-0 lg:translate-x-0'
          : 'translate-y-full lg:-translate-x-full lg:translate-y-0'
      }`}
    >
      <button
        className="btn absolute bottom-full border-2 border-b-0 border-grey-200 bg-base-white p-2 text-xl text-base-black lg:left-full lg:top-1/2 lg:border-l-0"
        onClick={toggleSideBar}
      >
        {'<'}
      </button>
      <DiaryContent />
    </div>
  );
};

export default DiarySideBar;
