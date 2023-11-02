import { CalendarScheduleItem } from '~/components/domain';

const NoCalendarScheduleItem = () => {
  return <div>일정이 없네요!</div>;
};

const SideBarDaySchedule = () => {
  return (
    <div className="w-full space-y-3">
      <CalendarScheduleItem
        customColor="blue"
        date="2023년 1월 10일"
        title="집가기"
      />
      <CalendarScheduleItem
        customColor="blue"
        date="2023년 1월 10일"
        title="집가기"
      />
      <CalendarScheduleItem
        customColor="blue"
        date="2023년 1월 10일"
        title="집가기"
      />
      <CalendarScheduleItem
        customColor="blue"
        date="2023년 1월 10일"
        title="집가기"
      />
    </div>
  );
};

export default SideBarDaySchedule;
