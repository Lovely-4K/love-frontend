import { PropsWithChildren, createContext, useEffect } from 'react';
import type { CalendarSchedule, Diarys, QuestionForm } from '~/types';
import { useMain } from '../hooks';
import useGetDiarys from '~/pages/Diary/hooks/useGetDiarys';
import { useGetRecentSchedule } from '~/services/calendar';
import { useCreateTodayQuestion, useGetQuestion } from '~/services/question';

interface MainContentContextProps {
  recentSchedule: CalendarSchedule;
  todayQuestion: QuestionForm;
  recentDiarys: Diarys;
}

const MainContentContext = createContext<MainContentContextProps | null>(null);

const MainContentProvider = ({ children }: PropsWithChildren) => {
  const { coupleMode } = useMain();
  const getRecentScheduleQuery = useGetRecentSchedule({ limit: 5, coupleMode });
  const { mutate: createTodayQuestion } = useCreateTodayQuestion();
  const getQuestionQuery = useGetQuestion();
  const getDiarysQuery = useGetDiarys();

  useEffect(() => {
    createTodayQuestion();
  }, [createTodayQuestion]);

  if (
    !getRecentScheduleQuery.isSuccess ||
    !getQuestionQuery.isSuccess ||
    !getDiarysQuery.isSuccess
  )
    return;

  return (
    <MainContentContext.Provider
      value={{
        recentSchedule: getRecentScheduleQuery.data,
        todayQuestion: getQuestionQuery.data,
        recentDiarys: getDiarysQuery.data,
      }}
    >
      {children}
    </MainContentContext.Provider>
  );
};

export { MainContentContext, MainContentProvider };
