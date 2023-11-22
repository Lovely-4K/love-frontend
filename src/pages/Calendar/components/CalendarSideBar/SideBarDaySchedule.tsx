import { format } from 'date-fns';
import { getScheduleColor } from '~/utils';
import { useCalendar } from '../../hooks';
import { ScheduleItem } from '~/components/domain';

const SideBarDaySchedule = () => {
  const { getMonthScheduleQuery, pickedDate } = useCalendar();
  const { isSuccess, data } = getMonthScheduleQuery;

  const formatPickedDate = format(pickedDate, 'yyyy-MM-dd');

  const schedules = isSuccess ? (
    data.schedules.map((schedule) => {
      if (
        schedule.startDate <= formatPickedDate &&
        schedule.endDate >= formatPickedDate
      )
        return (
          <ScheduleItem
            key={schedule.calendarId}
            customColor={getScheduleColor(schedule, data.colorInfo)}
            startDate={schedule.startDate}
            endDate={schedule.endDate}
            title={schedule.scheduleDetails}
          />
        );
    })
  ) : (
    <div>로딩 중...</div>
  );

  return (
    <div className="w-full space-y-3 overflow-auto lg:h-[26rem]">
      {schedules}
    </div>
  );
};

export default SideBarDaySchedule;
