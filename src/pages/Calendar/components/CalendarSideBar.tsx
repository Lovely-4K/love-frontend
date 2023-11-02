import SideBarDaySchedule from './SideBarDaySchedule';
import SideBarEditSchedule from './SideBarEditSchedule';
import { IconPlus } from '~/assets/icons';

const CalendarSideBar = () => {
  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto bg-grey-100 px-6 py-5 lg:w-[40rem] lg:justify-center lg:px-10">
      <div className="flex justify-between lg:pb-3">
        <h1 className="font-black lg:font-title">19일 일정</h1>
        <button>
          <IconPlus className="h-5 w-5" />
        </button>
      </div>
      {/* <SideBarEditSchedule /> */}
      <SideBarDaySchedule />
    </div>
  );
};

export default CalendarSideBar;
