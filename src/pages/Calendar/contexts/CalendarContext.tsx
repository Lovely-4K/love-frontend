import { PropsWithChildren, createContext, useMemo, useState } from 'react';

interface CalendarContextProps {
  pickedDate: Date;
  actions: {
    changeDate(date: Date): void;
    resetDate(): void;
  };
}

const CalendarContext = createContext<CalendarContextProps | null>(null);

const CalendarProvider = ({ children }: PropsWithChildren) => {
  const [pickedDate, setPickedDate] = useState(new Date());

  const actions = useMemo(
    () => ({
      changeDate(date: Date) {
        setPickedDate(date);
      },
      resetDate() {
        setPickedDate(new Date());
      },
    }),
    [],
  );

  const value = useMemo(() => ({ pickedDate, actions }), [pickedDate, actions]);

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarContext, CalendarProvider };
