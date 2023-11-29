import { PropsWithChildren, createContext, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DiaryContentContext } from './DiaryContentContext';
import useGetDiaryDetail from '~/services/diary/useGetDiaryDetail';

interface ReadContextProps {}
interface ReadProviderProps extends PropsWithChildren {}

const ReadContext = createContext<null | ReadContextProps>(null);

const ReadProvider = ({ children }: ReadProviderProps) => {
  const params = useParams();
  const { diaryId } = params;
  const { data: diaryResponse } = useGetDiaryDetail({ diaryId });
  const diaryContentContext = useContext(DiaryContentContext);

  if (diaryContentContext === null) throw new Error('');

  const { setDiary } = diaryContentContext;

  useEffect(() => {
    setDiary({ ...diaryResponse });
  }, [diaryResponse, setDiary]);

  return <ReadContext.Provider value={{}}>{children}</ReadContext.Provider>;
};

export default ReadProvider;
