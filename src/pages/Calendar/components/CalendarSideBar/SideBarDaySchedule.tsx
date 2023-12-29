import { useAtomValue, useSetAtom } from 'jotai';
import { getScheduleColor } from '~/utils';
import {
  currentMonthRangeAtom,
  openScheduleEditAtom,
  pickedDateAtom,
} from '../../stores/calendarAtom';
import { getDaySchedules } from '../../utils';
import { Loading } from '~/components/common';
import { ScheduleItem } from '~/components/domain';
import { useGetMonthSchedule } from '~/services/calendar';

const SideBarDaySchedule = () => {
  const pickedDate = useAtomValue(pickedDateAtom);
  const openScheduleEdit = useSetAtom(openScheduleEditAtom);
  const currentMonthRange = useAtomValue(currentMonthRangeAtom);
  const { data, isSuccess } = useGetMonthSchedule(currentMonthRange);

  if (!isSuccess)
    return (
      <div className="flex h-full w-full items-center justify-center lg:h-[26rem]">
        <Loading size="large" />
      </div>
    );

  const daySchedules = getDaySchedules({
    schedules: data.schedules,
    date: pickedDate,
  });

  const schedules =
    daySchedules.length > 0 ? (
      <ul className="space-y-2">
        {daySchedules.map((schedule) => {
          const mySchedule =
            schedule.ownerId === data.colorInfo.myId ||
            schedule.scheduleType !== 'PERSONAL';

          return (
            <li key={schedule.calendarId} className="relative">
              <ScheduleItem
                customColor={getScheduleColor(schedule, data.colorInfo)}
                schedule={schedule}
                mySchedule={mySchedule}
                onClick={
                  mySchedule ? () => openScheduleEdit(schedule) : undefined
                }
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
    );

  return (
    <div className="h-full w-full overflow-y-auto lg:h-[26rem]">
      {schedules}
    </div>
  );
};

export default SideBarDaySchedule;
