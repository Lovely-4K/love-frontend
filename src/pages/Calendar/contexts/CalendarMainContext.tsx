import { PropsWithChildren, createContext, useCallback, useMemo } from 'react';
import { useCalendar } from '../hooks';

interface CalendarMainContextProps {
  handlePickDate(date: Date): void;
  handleMoveToday(): void;
}

const CalendarMainContext = createContext<CalendarMainContextProps | null>(
  null,
);

const CalendarMainProvider = ({ children }: PropsWithChildren) => {
  const { actions } = useCalendar();

  const handlePickDate = useCallback(
    (date: Date) => {
      actions.changeDate(date);
    },
    [actions],
  );

  const handleMoveToday = useCallback(() => {
    actions.resetDate();
  }, [actions]);

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
