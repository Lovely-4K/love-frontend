import { Link } from 'react-router-dom';
import { scheduleColors } from '~/constants';
import { paths } from '~/router';
import type { ColorInfo, Schedule } from '~/types';
import { useMainContent } from '../../hooks';
import PreviewNoneItem from './PreviewNoneItem';
import { ScheduleItem } from '~/components/domain';

const getScheduleColor = (schedule: Schedule, colorInfo: ColorInfo) => {
  const { scheduleType, ownerId } = schedule;
  const { boyCalendarColor, boyId, girlCalendarColor } = colorInfo;
  if (scheduleType === 'PERSONAL') {
    return ownerId === boyId ? boyCalendarColor : girlCalendarColor;
  }

  return scheduleColors[scheduleType];
};

const PreviewCalendar = () => {
  const { recentSchedule } = useMainContent();
  const { colorInfo, schedules } = recentSchedule;

  const scheduleList =
    schedules.length > 0 ? (
      schedules.map((schedule) => (
        <Link to={paths.CALENDAR}>
          <ScheduleItem
            startDate={schedule.startDate}
            endDate={schedule.endDate}
            key={schedule.calendarId}
            title={schedule.scheduleDetails}
            customColor={getScheduleColor(schedule, colorInfo)}
          />
        </Link>
      ))
    ) : (
      <PreviewNoneItem
        title="추가된 일정이 없네요!"
        content="일정 추가하러 가기"
        to={paths.CALENDAR}
      />
    );

  return (
    <div className="flex w-full gap-3 overflow-auto scroll-smooth lg:flex-col">
      {scheduleList}
    </div>
  );
};

export default PreviewCalendar;
