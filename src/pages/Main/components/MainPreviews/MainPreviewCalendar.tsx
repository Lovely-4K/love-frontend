import { CalendarScheduleItem } from '~/components/domain';

const MainPreviewCalendar = () => {
  return (
    <div className="scrollbar-hide flex w-full overflow-x-scroll lg:flex-col lg:overflow-x-hidden lg:overflow-y-scroll [&>*:last-child]:relative [&>*:last-child]:after:absolute [&>*:last-child]:after:-right-5 [&>*:last-child]:after:block [&>*:last-child]:after:h-5 [&>*:last-child]:after:w-5">
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
