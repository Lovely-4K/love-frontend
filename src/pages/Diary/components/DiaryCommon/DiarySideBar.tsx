import { useState } from 'react';
import { IconTopArrow } from '~/assets/icons';
import { DiaryContent } from '~/pages/Diary/components/DiaryContent';
import { DiaryMain } from '~/pages/Diary/components/DiaryMain';
import { DiarySpot } from '~/pages/Diary/components/DiarySpot';

const DiarySideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const openStyle = isOpen
    ? 'translate-y-0 lg:translate-x-0'
    : 'translate-y-full h-0 lg:-translate-x-[98%] lg:translate-y-0';

  const arrowStyle = isOpen ? 'rotate-180 lg:-rotate-90' : 'lg:rotate-90';

  return (
    <div
      className={`absolute bottom-24 z-30 flex h-[23rem] w-full justify-center rounded-t-xl bg-base-white p-7 shadow-[0rem_-0.08rem_0.08rem_0rem_rgba(0,0,0,0.25)] transition-all duration-300 lg:bottom-0 lg:left-28 lg:h-screen lg:w-[23rem] lg:rounded-r-xl lg:shadow-[0.08rem_0.08rem_0.08rem_0rem_rgba(0,0,0,0.25)] ${openStyle}`}
    >
      <button
        className="absolute bottom-full flex h-7 w-10 items-center justify-center rounded-t-xl border-2 border-b-0 border-grey-300 bg-base-white text-xl text-base-black lg:left-full lg:top-1/2 lg:h-10 lg:w-7 lg:rounded-l-none lg:rounded-r-xl lg:border-b-2 lg:border-l-0"
        onClick={toggleSideBar}
      >
        <IconTopArrow className={`h-4 w-4 fill-grey-400 ${arrowStyle}`} />
      </button>
      <DiaryContent />
    </div>
  );
};

export default DiarySideBar;
