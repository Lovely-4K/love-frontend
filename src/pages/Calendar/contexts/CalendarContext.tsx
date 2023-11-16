import {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface CalendarContextProps {
  pickedDate: Date;
  changeDate(date: Date): void;
  resetDate(): void;
}

const CalendarContext = createContext<CalendarContextProps | null>(null);

const CalendarProvider = ({ children }: PropsWithChildren) => {
  const [pickedDate, setPickedDate] = useState(new Date());

  const changeDate = useCallback((date: Date) => {
    setPickedDate(date);
  }, []);

  const resetDate = useCallback(() => {
    setPickedDate(new Date());
  }, []);

  const value = useMemo(
    () => ({ pickedDate, changeDate, resetDate }),
    [pickedDate, changeDate, resetDate],
  );

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarContext, CalendarProvider };
