import { CalendarScheduleItem } from '~/components/domain';

const MainPreviewCalendar = () => {
  return (
    <div className="flex w-full overflow-x-scroll scroll-smooth scrollbar-none md:flex-col md:overflow-x-hidden  md:overflow-y-scroll md:scrollbar-thin md:scrollbar-w-1 [&>*:last-child]:relative [&>*:last-child]:after:absolute [&>*:last-child]:after:-right-5 [&>*:last-child]:after:block [&>*:last-child]:after:h-5 [&>*:last-child]:after:w-5">
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
      <CalendarScheduleItem
        customColor={'purple'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
    </div>
  );
};

export default MainPreviewCalendar;
