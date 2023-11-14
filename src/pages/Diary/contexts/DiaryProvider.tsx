import { PropsWithChildren, createContext, useRef, useState } from 'react';

interface DiaryContextProps {
  searchInputRef: React.RefObject<HTMLInputElement>;
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const DiaryContext = createContext({} as DiaryContextProps);

const DiaryProvider = ({ children }: PropsWithChildren) => {
  const searchInputRef = useRef(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <DiaryContext.Provider
      value={{ searchInputRef, searchKeyword, setSearchKeyword }}
    >
      {children}
    </DiaryContext.Provider>
  );
};

export { DiaryContext, DiaryProvider };
