import { useContext } from 'react';
import { CalendarMainContext } from '../contexts';

const useCalendar = () => {
  const calendarContext = useContext(CalendarMainContext);

  if (!calendarContext) throw new Error('Cannot find CalendarMainProvider');

  return calendarContext;
};

export default useCalendar;
