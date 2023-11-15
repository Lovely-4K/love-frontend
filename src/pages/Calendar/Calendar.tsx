import { CalendarMain, CalendarSideBar } from './components';
import { CalendarMainProvider, CalendarProvider } from './contexts';

const Calendar = () => {
  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      <CalendarProvider>
        <CalendarMainProvider>
          <CalendarMain />
        </CalendarMainProvider>
        <CalendarSideBar />
      </CalendarProvider>
    </div>
  );
};

export default Calendar;
