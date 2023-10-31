import { CalendarMain, CalendarSide } from './components';
import 'react-calendar/dist/Calendar.css';

const Calendar = () => {
  return (
    <div className="h-full w-full">
      <CalendarMain />
      <CalendarSide />
    </div>
  );
};

export default Calendar;
