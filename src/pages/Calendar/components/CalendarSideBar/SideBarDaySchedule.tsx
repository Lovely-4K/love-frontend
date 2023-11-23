import { format } from 'date-fns';
import { getScheduleColor } from '~/utils';
import { useCalendar, useCalendarSideBar } from '../../hooks';
import { Loading } from '~/components/common';
import { ScheduleItem } from '~/components/domain';

const SideBarDaySchedule = () => {
  const { getMonthScheduleQuery, pickedDate } = useCalendar();
  const { editSchedule } = useCalendarSideBar();
  const { isSuccess, data } = getMonthScheduleQuery;

  const formatPickedDate = format(pickedDate, 'yyyy-MM-dd');

  const schedules = isSuccess ? (
    <ul className="space-y-3">
      {data.schedules.map((schedule) => {
        if (
          schedule.startDate <= formatPickedDate &&
          schedule.endDate >= formatPickedDate
        )
          return (
            <li className="relative" key={schedule.calendarId}>
              <ScheduleItem
                customColor={getScheduleColor(schedule, data.colorInfo)}
                startDate={schedule.startDate}
                endDate={schedule.endDate}
                title={schedule.scheduleDetails}
                onClick={() => editSchedule(schedule)}
              />
            </li>
          );
      })}
    </ul>
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <Loading size="large" />
    </div>
  );

  return <div className="w-full overflow-y-auto lg:h-[26rem]">{schedules}</div>;
};

export default SideBarDaySchedule;
