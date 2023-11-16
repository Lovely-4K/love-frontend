import {
  MouseEvent,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useCalendar } from '../hooks';

interface CalendarMainContextProps {
  handlePickDate(date: Date): void;
  handleMoveToday(event: MouseEvent<HTMLSpanElement>): void;
}

interface MonthRange {
  from: Date | null;
  to: Date | null;
}

const CalendarMainContext = createContext<CalendarMainContextProps | null>(
  null,
);

const CalendarMainProvider = ({ children }: PropsWithChildren) => {
  const { changeDate, resetDate } = useCalendar();
  const [monthRange, setMonthRange] = useState<MonthRange>({
    from: null,
    to: null,
  });

  const handlePickDate = useCallback(
    (date: Date) => {
      changeDate(date);
    },
    [changeDate],
  );

  const handleMoveToday = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
      resetDate();
    },
    [resetDate],
  );

  const value = useMemo(
    () => ({ handlePickDate, handleMoveToday }),
    [handlePickDate, handleMoveToday],
  );

  return (
    <CalendarMainContext.Provider value={value}>
      {children}
    </CalendarMainContext.Provider>
  );
};

export { CalendarMainContext, CalendarMainProvider };
