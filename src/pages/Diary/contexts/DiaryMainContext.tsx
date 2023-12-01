import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import {
  LegacyRef,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import type { DiaryContent } from '~/types';
import useDiaryCategories from '../hooks/Diary/useDiaryCategories';
import useDiaryContext from '../hooks/Diary/useDiaryContext';
import useSelectSortMethod from '../hooks/Diary/useSelectSortMethod';
import useDiaryMainObserver from '../hooks/DiaryMain/useDiaryMainObserver';
import useGetDiarys from '~/services/diary/useGetDiarys';

interface DiaryMainContextProps {
  recordRef: LegacyRef<HTMLDivElement> | undefined;
  diarys: DiaryContent[];
  diaryCategory: categoryType | undefined;
  selectSortMethod: string;
  handleCategory: (category: categoryType | undefined) => void;
  handleSortMethodClick: (sortMethod: string) => void;
}

const DiaryMainContext = createContext<DiaryMainContextProps | null>(null);

const DiaryMainProvider = ({ children }: PropsWithChildren) => {
  const [diaryCategory, setDiaryCategory] = useState<categoryType | undefined>(
    undefined,
  );
  const [selectSortMethod, setSelectSortMethod] = useState<string>('datingDay');
  const { setRootDiarys } = useDiaryContext();
  const [page, setPage] = useState(0);
  const [diarys, setDiarys] = useState<DiaryContent[]>([]);
  const { data: diaryResponse } = useGetDiarys({
    page,
    diaryCategory,
    selectSortMethod,
  });

  const { handleCategory } = useDiaryCategories({ setDiaryCategory });
  const { handleSortMethodClick } = useSelectSortMethod({
    setSelectSortMethod,
  });
  const { recordRef } = useDiaryMainObserver({
    diaryResponse,
    page,
    setPage,
    diarys,
  });

  useEffect(() => {
    setPage(0);
  }, [diaryCategory, selectSortMethod]);

  useEffect(() => {
    if (page === 0) {
      setDiarys(diaryResponse.content);
    } else {
      setDiarys([...diarys, ...diaryResponse.content]);
    }
  }, [page, diaryResponse]);

  useEffect(() => {
    setRootDiarys(diarys);
  }, [setRootDiarys, diarys]);

  return (
    <DiaryMainContext.Provider
      value={{
        diaryCategory,
        selectSortMethod,
        recordRef,
        diarys,
        handleCategory,
        handleSortMethodClick,
      }}
    >
      {children}
    </DiaryMainContext.Provider>
  );
};

export { DiaryMainContext, DiaryMainProvider };
