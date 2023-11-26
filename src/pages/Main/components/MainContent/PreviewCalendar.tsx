import { Link } from 'react-router-dom';
import { paths } from '~/router';
import { getScheduleColor } from '~/utils';
import { useMainContent } from '../../hooks';
import PreviewNoneItem from './PreviewNoneItem';
import { ScheduleItem } from '~/components/domain';

const PreviewCalendar = () => {
  const { recentSchedule } = useMainContent();
  const { colorInfo, schedules } = recentSchedule;

  const scheduleList =
    schedules.length > 0 ? (
      schedules.map((schedule) => (
        <Link to={paths.CALENDAR} key={schedule.calendarId}>
          <ScheduleItem
            startDate={schedule.startDate}
            endDate={schedule.endDate}
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
