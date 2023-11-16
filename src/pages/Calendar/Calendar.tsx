import { CalendarMain, CalendarSideBar } from './components';
import {
  CalendarMainProvider,
  CalendarProvider,
  CalendarSideBarProvider,
} from './contexts';

const Calendar = () => {
  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      <CalendarProvider>
        <CalendarMainProvider>
          <CalendarMain />
        </CalendarMainProvider>
        <CalendarSideBarProvider>
          <CalendarSideBar />
        </CalendarSideBarProvider>
      </CalendarProvider>
    </div>
  );
};

export default Calendar;
