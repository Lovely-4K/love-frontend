import { Link } from 'react-router-dom';
import { scheduleColors } from '~/constants';
import { paths } from '~/router';
import type { ColorInfo, Schedule } from '~/types';
import { useMainContent } from '../../hooks';
import { ScheduleItem } from '~/components/domain';

const getScheduleColor = (schedule: Schedule, colorInfo: ColorInfo) => {
  const { scheduleType, ownerId } = schedule;
  const { boyCalendarColor, boyId, girlCalendarColor } = colorInfo;
  if (scheduleType === 'PERSONAL') {
    if (ownerId === boyId) return boyCalendarColor;

    return girlCalendarColor;
  }

  return scheduleColors[scheduleType];
};

const PreviewCalendar = () => {
  const { recentSchedule } = useMainContent();
  const { colorInfo, schedules } = recentSchedule;

  const scheduleList =
    schedules.length > 0 ? (
      schedules.map((schedule) => (
        <ScheduleItem
          startDate={schedule.startDate}
          endDate={schedule.endDate}
          key={schedule.calendarId}
          title={schedule.scheduleDetails}
          customColor={getScheduleColor(schedule, colorInfo)}
        />
      ))
    ) : (
      <div className="flex h-20 w-full flex-col items-center justify-center gap-1 lg:h-56">
        <div className="text-base">추가된 일정이 없네요!</div>
        <Link to={paths.CALENDAR} className="text-base text-grey-400">
          일정 추가하러 가기 →
        </Link>
      </div>
    );

  return (
    <div className="flex w-full gap-3 overflow-auto scroll-smooth lg:flex-col">
      {scheduleList}
    </div>
  );
};

export default PreviewCalendar;
