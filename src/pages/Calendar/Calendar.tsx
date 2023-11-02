import { CalendarMain, CalendarSideBar } from './components';

const Calendar = () => {
  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      <CalendarMain />
      <CalendarSideBar />
    </div>
  );
};

export default Calendar;
