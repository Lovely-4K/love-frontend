import { ScheduleItem } from '~/components/domain';

const PreviewCalendar = () => {
  return (
    <div className="flex w-full overflow-auto scroll-smooth md:flex-col">
      <ScheduleItem
        customColor="blue"
        startDate="2023-01-10"
        endDate="2023-01-10"
        title="집가기"
      />
    </div>
  );
};

export default PreviewCalendar;
