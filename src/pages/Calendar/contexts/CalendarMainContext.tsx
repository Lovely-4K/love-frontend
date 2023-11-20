import {
  MouseEvent,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
} from 'react';
import { useCalendar } from '../hooks';

interface CalendarMainContextProps {
  handlePickDate(date: Date): void;
  handleMoveToday(event: MouseEvent<HTMLSpanElement>): void;
}

const CalendarMainContext = createContext<CalendarMainContextProps | null>(
  null,
);

const CalendarMainProvider = ({ children }: PropsWithChildren) => {
  const { changePickedDate } = useCalendar();

  const handlePickDate = useCallback(
    (date: Date) => {
      changePickedDate(date);
    },
    [changePickedDate],
  );

  const handleMoveToday = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
      changePickedDate(new Date());
    },
    [changePickedDate],
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
