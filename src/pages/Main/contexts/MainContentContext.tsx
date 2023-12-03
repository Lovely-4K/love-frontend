import { PropsWithChildren, createContext, useEffect } from 'react';
import type { CalendarSchedule, Diarys, QuestionFormResponse } from '~/types';
import useLayoutContext from '~/hooks/useLayoutContext';
import { useGetRecentSchedule } from '~/services/calendar';
import useGetDiarys from '~/services/diary/useGetDiarys';
import { useCreateTodayQuestion, useGetQuestion } from '~/services/question';

interface MainContentContextProps {
  recentSchedule: CalendarSchedule | undefined;
  todayQuestion: QuestionFormResponse | undefined;
  recentDiarys: Diarys | undefined;
}

const MainContentContext = createContext<MainContentContextProps | null>(null);

const MainContentProvider = ({ children }: PropsWithChildren) => {
  const { coupleMode } = useLayoutContext();
  const getRecentScheduleQuery = useGetRecentSchedule({
    limit: 10,
    coupleMode: coupleMode === 'RELATIONSHIP',
  });
  const { mutate: createTodayQuestion } = useCreateTodayQuestion();
  const getQuestionQuery = useGetQuestion();
  const getDiarysQuery = useGetDiarys({ page: 0 });

  useEffect(() => {
    createTodayQuestion();
  }, [createTodayQuestion]);

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
