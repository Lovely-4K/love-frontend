import { PropsWithChildren, createContext, useMemo } from 'react';
import type { CalendarSchedule } from '~/types';
import { useMain } from '../hooks';
import { useGetRecentSchedule } from '~/services/calendar';

interface MainContentContextProps {
  recentSchedule: CalendarSchedule;
}

const MainContentContext = createContext<MainContentContextProps | null>(null);

const MainContentProvider = ({ children }: PropsWithChildren) => {
  const { coupleMode } = useMain();
  const getRecentScheduleQuery = useGetRecentSchedule({ limit: 5, coupleMode });

  if (!getRecentScheduleQuery.isSuccess) return;

  return (
    <MainContentContext.Provider
      value={{ recentSchedule: getRecentScheduleQuery.data }}
    >
      {children}
    </MainContentContext.Provider>
  );
};

export { MainContentContext, MainContentProvider };
