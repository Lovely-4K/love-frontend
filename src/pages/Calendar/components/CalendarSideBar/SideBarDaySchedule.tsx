import { getScheduleColor } from '~/utils';
import { useCalendar, useCalendarSideBar } from '../../hooks';
import { IconTrash } from '~/assets/icons';
import { Loading } from '~/components/common';
import { ScheduleItem } from '~/components/domain';
import { useDeleteSchedule } from '~/services/calendar';

const SideBarDaySchedule = () => {
  const { getMonthScheduleQuery, validSchedules } = useCalendar();
  const { editSchedule } = useCalendarSideBar();
  const { isSuccess, data } = getMonthScheduleQuery;
  const { mutate: deleteSchedule } = useDeleteSchedule();

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
                startDate={schedule.startDate}
                endDate={schedule.endDate}
                title={schedule.scheduleDetails}
                onClick={mySchedule ? () => editSchedule(schedule) : undefined}
                style={{ cursor: mySchedule ? 'pointer' : 'default' }}
              />
              {mySchedule && (
                <button
                  className="group absolute right-6 top-3"
                  onClick={() =>
                    deleteSchedule({ scheduleId: schedule.calendarId })
                  }
                >
                  <IconTrash className="h-4 w-4 stroke-grey-500 group-hover:stroke-base-black" />
                </button>
              )}
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
