import { Link } from 'react-router-dom';
import { paths } from '~/router';
import { getScheduleColor } from '~/utils';
import PreviewNoneItem from './PreviewNoneItem';
import { Loading } from '~/components/common';
import { ScheduleItem } from '~/components/domain';
import { useGetRecentSchedule } from '~/services/calendar';
import { useGetCoupleProfile } from '~/services/couple';

const PreviewCalendar = () => {
  const { data: coupleProfile } = useGetCoupleProfile();
  const coupleMode = coupleProfile.coupleStatus;

  const { data: recentSchedule } = useGetRecentSchedule({
    limit: 10,
    coupleMode: coupleMode === 'RELATIONSHIP',
  });

  if (!recentSchedule)
    return (
      <Loading
        size="medium"
        className="h-full self-center justify-self-center"
      />
    );

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
