import { LegacyRef, PropsWithChildren, createContext, useState } from 'react';
import useDiaryMainObserver from '../hooks/DiaryMain/useDiaryMainObserver';

interface DiaryMainContextProps {
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
  recordRef: LegacyRef<HTMLDivElement> | undefined;
}

const DiaryMainContext = createContext<DiaryMainContextProps | null>(null);

const DiaryMainProvider = ({ children }: PropsWithChildren) => {
  const [selectCategory, setSelectCategory] = useState('');
  const { recordRef } = useDiaryMainObserver();

  return (
    <DiaryMainContext.Provider
      value={{ selectCategory, setSelectCategory, recordRef }}
    >
      {children}
    </DiaryMainContext.Provider>
  );
};

export { DiaryMainContext, DiaryMainProvider };
