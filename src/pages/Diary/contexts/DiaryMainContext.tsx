import { PropsWithChildren, createContext, useState } from 'react';

interface DiaryMainContextProps {
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
}

const DiaryMainContext = createContext<DiaryMainContextProps | null>(null);

const DiaryMainProvider = ({ children }: PropsWithChildren) => {
  const [selectCategory, setSelectCategory] = useState('');

  return (
    <DiaryMainContext.Provider value={{ selectCategory, setSelectCategory }}>
      {children}
    </DiaryMainContext.Provider>
  );
};

export { DiaryMainContext, DiaryMainProvider };
