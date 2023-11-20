import { useContext } from 'react';
import { CalendarSideBarContext } from '../contexts';

const useCalendarSideBar = () => {
  const calendarSideBarContext = useContext(CalendarSideBarContext);

  if (!calendarSideBarContext)
    throw new Error('Cannot find CalendarSideBarProvider');

  return calendarSideBarContext;
};

export default useCalendarSideBar;
