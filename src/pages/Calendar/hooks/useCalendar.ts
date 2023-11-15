import { useContext } from 'react';
import { CalendarContext } from '../contexts';

const useCalendar = () => {
  const calendarContext = useContext(CalendarContext);

  if (!calendarContext) throw new Error('Cannot find CalendarProvider');

  return calendarContext;
};

export default useCalendar;
