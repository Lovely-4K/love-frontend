import { useCalendarSideBar } from '../../hooks';
import SideBarDaySchedule from './SideBarDaySchedule';
import SideBarEditSchedule from './SideBarEditSchedule/SideBarEditSchedule';
import { IconPlus } from '~/assets/icons';

const CalendarSideBar = () => {
  const { today, editSchedule, activeEdit } = useCalendarSideBar();

  const SideBarContent = activeEdit ? (
    <SideBarEditSchedule />
  ) : (
    <SideBarDaySchedule />
  );

  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto bg-grey-100 px-6 py-5 lg:w-[40rem] lg:justify-center lg:px-10">
      <div className="flex justify-between lg:pb-3">
        <h1 className="font-black lg:text-lg">{today}일 일정</h1>
        {!activeEdit && (
          <button onClick={editSchedule}>
            <IconPlus className="h-5 w-5 stroke-base-black" />
          </button>
        )}
      </div>
      {SideBarContent}
    </div>
  );
};

export default CalendarSideBar;
