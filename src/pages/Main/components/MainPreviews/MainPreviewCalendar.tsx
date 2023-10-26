import { CalendarScheduleItem } from '~/components/domain';

const MainPreviewCalendar = () => {
  return (
    <div className="scrollbar-hide flex w-full overflow-x-scroll lg:flex-col lg:overflow-x-hidden lg:overflow-y-scroll">
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
    </div>
  );
};

export default MainPreviewCalendar;
