import { Link } from 'react-router-dom';
import { paths } from '~/router';
import { getScheduleColor } from '~/utils';
import { useMainContent } from '../../hooks';
import PreviewNoneItem from './PreviewNoneItem';
import { ScheduleItem } from '~/components/domain';

const PreviewCalendar = () => {
  const { recentSchedule } = useMainContent();
  const { colorInfo, schedules } = recentSchedule;

  return schedules.length > 0 ? (
    <div className="flex h-full w-full gap-3 overflow-auto scroll-smooth lg:flex-col">
      {schedules.map((schedule) => (
        <Link to={paths.CALENDAR} key={schedule.calendarId}>
          <ScheduleItem
            schedule={schedule}
            customColor={getScheduleColor(schedule, colorInfo)}
          />
        </Link>
      ))}
    </div>
  ) : (
    <PreviewNoneItem
      title="추가된 일정이 없네요!"
      content="일정 추가하러 가기"
      to={paths.CALENDAR}
    />
  );
};

export default PreviewCalendar;
