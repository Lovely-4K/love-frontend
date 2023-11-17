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
  const dateCalendarItems = useMemo(() => {
    // console.log(pickedDate);
  }, [pickedDate]);

  const initialEditDate = useMemo(() => {
    return format(pickedDate, 'yyyy-MM-dd');
  }, [pickedDate]);

  const [scheduleInfo, setScheduleInfo] = useState<EditSchedule>({
    startDate: initialEditDate,
    endDate: initialEditDate,
    scheduleDetails: '',
    scheduleType: null,
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

      if (name === 'startDate') {
        setScheduleInfo({
          ...scheduleInfo,
          startDate: value,
        });

        return;
      }
      if (name === 'endDate') {
        setScheduleInfo({
          ...scheduleInfo,
          endDate: value,
        });

        return;
      }

      if (name === 'scheduleDetails') {
        setScheduleInfo({
          ...scheduleInfo,
          scheduleDetails: value,
        });

        return;
      }

      if (name === 'type' || name === 'owner') {
        const type = name === 'owner' && value !== '함께' ? 'PERSONAL' : value;
        setScheduleInfo({
          ...scheduleInfo,
          scheduleType: type as EditSchedule['scheduleType'],
        });

        return;
      }
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
