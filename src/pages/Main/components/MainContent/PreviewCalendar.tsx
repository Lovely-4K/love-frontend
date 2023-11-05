import { CalendarScheduleItem } from '~/components/domain';

const PreviewCalendar = () => {
  return (
    <div className="flex w-full overflow-auto scroll-smooth md:flex-col">
      <CalendarScheduleItem
        customColor={'blue'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
      <CalendarScheduleItem
        customColor={'pink'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
      <CalendarScheduleItem
        customColor={'purple'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
      <CalendarScheduleItem
        customColor={'purple'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
      <CalendarScheduleItem
        customColor={'purple'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
      <CalendarScheduleItem
        customColor={'purple'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
    </div>
  );
};

export default PreviewCalendar;
