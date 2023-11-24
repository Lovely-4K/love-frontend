import { getScheduleColor } from '~/utils';
import { useCalendar, useCalendarSideBar } from '../../hooks';
import { Loading } from '~/components/common';
import { ScheduleItem } from '~/components/domain';

const SideBarDaySchedule = () => {
  const { getMonthScheduleQuery, validSchedules } = useCalendar();
  const { editSchedule } = useCalendarSideBar();
  const { isSuccess, data } = getMonthScheduleQuery;

  const schedules = isSuccess ? (
    validSchedules.length > 0 ? (
      validSchedules.map((schedule) => (
        <ScheduleItem
          key={schedule.calendarId}
          customColor={getScheduleColor(schedule, data.colorInfo)}
          startDate={schedule.startDate}
          endDate={schedule.endDate}
          title={schedule.scheduleDetails}
          onClick={() => editSchedule(schedule)}
        />
      ))
    ) : (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-base text-grey-500">일정이 없어요!</span>
      </div>
    )
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <Loading size="large" />
    </div>
  );

  return (
    <div className="h-full w-full space-y-3 overflow-y-auto lg:h-[26rem]">
      {schedules}
    </div>
  );
};

export default SideBarDaySchedule;
