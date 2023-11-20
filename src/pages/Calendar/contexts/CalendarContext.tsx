import type { UseQueryResult } from '@tanstack/react-query';
import {
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import type { CalendarSchedule } from '~/types';
import { useGetMonthSchedule } from '~/hooks/calendar';

interface CalendarContextProps {
  pickedDate: Date;
  changePickedDate(date: Date): void;
  getMonthScheduleQuery: UseQueryResult<CalendarSchedule, Error>;
}

const CalendarContext = createContext<CalendarContextProps | null>(null);

const CalendarProvider = ({ children }: PropsWithChildren) => {
  const [pickedDate, setPickedDate] = useState(new Date());

  const { startDate, endDate } = useMemo(() => {
    const startDate = format(
      startOfWeek(startOfMonth(pickedDate)),
      'yyyy-MM-dd',
    );
    const endDate = format(endOfWeek(endOfMonth(pickedDate)), 'yyyy-MM-dd');

    return { startDate, endDate };
  }, [pickedDate]);

  const getMonthScheduleQuery = useGetMonthSchedule({
    from: startDate,
    to: endDate,
  });

  const changePickedDate = useCallback((date: Date) => {
    setPickedDate(date);
  }, []);

  const value = useMemo(
    () => ({ pickedDate, changePickedDate, getMonthScheduleQuery }),
    [pickedDate, changePickedDate, getMonthScheduleQuery],
  );

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarContext, CalendarProvider };
