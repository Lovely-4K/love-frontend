import { format } from 'date-fns';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { EditSchedule, Schedule } from '~/types';
import { useCalendar } from '../hooks';
import { useCreateSchedule, useEditSchedule } from '~/services/calendar';

interface ScheduleInfo extends EditSchedule {
  scheduleId: number | null;
}

interface CalendarSideBarContextProps {
  activeEdit: boolean;
  editSchedule(prevInfo?: Schedule | null): void;
  closeEditSchedule(): void;
  saveEditSchedule(): void;
  scheduleInfo: ScheduleInfo;
  handleEditInput(event: React.ChangeEvent<HTMLInputElement>): void;
}

const CalendarSideBarContext =
  createContext<CalendarSideBarContextProps | null>(null);

const CalendarSideBarProvider = ({ children }: PropsWithChildren) => {
  const { pickedDate } = useCalendar();
  const { mutate: createSchedule } = useCreateSchedule();
  const { mutate: patchSchedule } = useEditSchedule();
  const [activeEdit, setActiveEdit] = useState(false);

  const initialEditDate = useMemo(() => {
    return format(pickedDate, 'yyyy-MM-dd');
  }, [pickedDate]);

  const [scheduleInfo, setScheduleInfo] = useState<ScheduleInfo>({
    startDate: initialEditDate,
    endDate: initialEditDate,
    scheduleDetails: '',
    scheduleType: 'PERSONAL',
    scheduleId: null,
  });

  useEffect(() => {
    setActiveEdit(false);
  }, [initialEditDate]);

  const editSchedule = useCallback(
    (prevInfo: Schedule) => {
      if (prevInfo) {
        setScheduleInfo({
          startDate: prevInfo.startDate,
          endDate: prevInfo.endDate,
          scheduleDetails: prevInfo.scheduleDetails,
          scheduleType: prevInfo.scheduleType,
          scheduleId: prevInfo.calendarId,
        });
      } else {
        setScheduleInfo({
          startDate: initialEditDate,
          endDate: initialEditDate,
          scheduleDetails: '',
          scheduleType: 'PERSONAL',
          scheduleId: null,
        });
      }
      setActiveEdit(true);
    },
    [initialEditDate],
  );

  const closeEditSchedule = useCallback(() => {
    setActiveEdit(false);
  }, []);

  const saveEditSchedule = useCallback(() => {
    const newScheduleInfo = {
      startDate: scheduleInfo.startDate,
      endDate: scheduleInfo.endDate,
      scheduleDetails: scheduleInfo.scheduleDetails,
      scheduleType: scheduleInfo.scheduleType,
    };
    if (scheduleInfo.scheduleId) {
      patchSchedule({
        schedule: newScheduleInfo,
        scheduleId: scheduleInfo.scheduleId,
      });
    } else {
      createSchedule({ schedule: newScheduleInfo });
    }
    setActiveEdit(false);
  }, [scheduleInfo, createSchedule, patchSchedule]);

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
