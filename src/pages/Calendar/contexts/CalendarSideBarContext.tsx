import { format } from 'date-fns';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { EditSchedule } from '~/types';
import { useCalendar } from '../hooks';

interface CalendarSideBarContextProps {
  activeEdit: boolean;
  editSchedule(): void;
  closeEditSchedule(): void;
  saveEditSchedule(): void;
  scheduleInfo: EditSchedule;
  handleEditInput(event: React.ChangeEvent<HTMLInputElement>): void;
}

const CalendarSideBarContext =
  createContext<CalendarSideBarContextProps | null>(null);

const CalendarSideBarProvider = ({ children }: PropsWithChildren) => {
  const { pickedDate } = useCalendar();
  const [activeEdit, setActiveEdit] = useState(false);
  const dateCalendarItems = useMemo(() => {}, [pickedDate]);

  const initialEditDate = useMemo(() => {
    return format(pickedDate, 'yyyy-MM-dd');
  }, [pickedDate]);

  const [scheduleInfo, setScheduleInfo] = useState<EditSchedule>({
    startDate: initialEditDate,
    endDate: initialEditDate,
    scheduleDetails: '',
    scheduleType: 'PERSONAL',
  });

  useEffect(() => {
    setScheduleInfo((prev) => ({
      ...prev,
      startDate: initialEditDate,
      endDate: initialEditDate,
    }));
  }, [initialEditDate]);

  const editSchedule = useCallback(() => {
    setActiveEdit(true);
  }, []);

  const closeEditSchedule = useCallback(() => {
    setActiveEdit(false);
  }, []);

  const saveEditSchedule = useCallback(() => {
    setActiveEdit(false);
  }, []);

  const handleEditInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      const key = name === 'ownerType' ? 'scheduleType' : name;
      const editValue = value === 'COUPLE' ? 'DATE' : value;

      setScheduleInfo({
        ...scheduleInfo,
        [key]: editValue,
      });
    },
    [scheduleInfo],
  );

  const value = useMemo(
    () => ({
      activeEdit,
      editSchedule,
      closeEditSchedule,
      saveEditSchedule,
      scheduleInfo,
      handleEditInput,
    }),
    [
      activeEdit,
      editSchedule,
      closeEditSchedule,
      saveEditSchedule,
      scheduleInfo,
      handleEditInput,
    ],
  );

  return (
    <CalendarSideBarContext.Provider value={value}>
      {children}
    </CalendarSideBarContext.Provider>
  );
};

export { CalendarSideBarContext, CalendarSideBarProvider };
