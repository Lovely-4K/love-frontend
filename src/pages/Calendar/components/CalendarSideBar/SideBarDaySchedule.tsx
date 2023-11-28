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
      <ul className="space-y-2">
        {validSchedules.map((schedule) => {
          const mySchedule =
            schedule.ownerId === data.colorInfo.myId ||
            schedule.scheduleType !== 'PERSONAL';

          return (
            <li key={schedule.calendarId} className="relative">
              <ScheduleItem
                customColor={getScheduleColor(schedule, data.colorInfo)}
                schedule={schedule}
                mySchedule={mySchedule}
                onClick={mySchedule ? () => editSchedule(schedule) : undefined}
                style={{ cursor: mySchedule ? 'pointer' : 'default' }}
              />
            </li>
          );
        })}
      </ul>
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
    <div className="h-full w-full overflow-y-auto lg:h-[26rem]">
      {schedules}
    </div>
  );
};

export default SideBarDaySchedule;
