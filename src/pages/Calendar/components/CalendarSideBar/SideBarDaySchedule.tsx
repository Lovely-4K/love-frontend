import { ScheduleItem } from '~/components/domain';

const SideBarDaySchedule = () => {
  return (
    <div className="w-full space-y-3">
      <ScheduleItem
        customColor="blue"
        startDate="2023-01-10"
        endDate="2023-01-10"
        title="집가기"
      />
      <ScheduleItem
        customColor="blue"
        startDate="2023-01-10"
        endDate="2023-01-10"
        title="집가기"
      />
    </div>
  );
};

export default SideBarDaySchedule;
