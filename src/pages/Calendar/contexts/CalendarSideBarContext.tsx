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
  today: number;
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

  const initialEditDate = useMemo(() => {
    const year = pickedDate.getFullYear();
    const month = (pickedDate.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1 해주고, 두 자리로 맞춥니다.
    const day = pickedDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }, [pickedDate]);

  const [scheduleInfo, setScheduleInfo] = useState<EditSchedule>({
    startDate: initialEditDate,
    endDate: initialEditDate,
    scheduleDetails: '',
    scheduleType: null,
  });

  const today = useMemo(() => {
    return pickedDate.getDate();
  }, [pickedDate]);

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
    },
    [scheduleInfo],
  );

  const value = useMemo(
    () => ({
      today,
      activeEdit,
      editSchedule,
      closeEditSchedule,
      saveEditSchedule,
      scheduleInfo,
      handleEditInput,
    }),
    [
      today,
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
