import {
  LegacyRef,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import type { DiaryContent } from '~/types';
import useDiaryContext from '../hooks/Diary/useDiaryContext';
import useDiaryMainObserver from '../hooks/DiaryMain/useDiaryMainObserver';
import useGetDiarys from '~/services/diary/useGetDiarys';

interface DiaryMainContextProps {
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
  recordRef: LegacyRef<HTMLDivElement> | undefined;
  diarys: DiaryContent[];
}

const DiaryMainContext = createContext<DiaryMainContextProps | null>(null);

const DiaryMainProvider = ({ children }: PropsWithChildren) => {
  const { diaryCategory, setRootDiarys } = useDiaryContext();
  const [selectCategory, setSelectCategory] = useState('');
  const [page, setPage] = useState(0);
  const [diarys, setDiarys] = useState<DiaryContent[]>([]);
  const { data: diaryResponse } = useGetDiarys({ page, diaryCategory });
  const { recordRef } = useDiaryMainObserver({ page, setPage, diarys });

  useEffect(() => {
    setPage(0);
  }, [diaryCategory]);

  useEffect(() => {
    if (page === 0) {
      setDiarys(diaryResponse.content);
    } else {
      setDiarys([...diarys, ...diaryResponse.content]);
    }
  }, [diaryResponse]);

  useEffect(() => {
    setRootDiarys(diarys);
  }, [diarys]);

  return (
    <DiaryMainContext.Provider
      value={{ selectCategory, setSelectCategory, recordRef, diarys }}
    >
      {children}
    </DiaryMainContext.Provider>
  );
};

export { DiaryMainContext, DiaryMainProvider };
