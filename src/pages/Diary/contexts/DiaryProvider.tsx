import { PropsWithChildren, createContext, useRef, useState } from 'react';

interface DiaryContextProps {
  searchInputRef: React.RefObject<HTMLInputElement>;
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  sideBarToggle: boolean;
  setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiaryContext = createContext({} as DiaryContextProps);

const DiaryProvider = ({ children }: PropsWithChildren) => {
  const searchInputRef = useRef(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sideBarToggle, setSideBarToggle] = useState(true);

  return (
    <DiaryContext.Provider
      value={{
        searchInputRef,
        searchKeyword,
        setSearchKeyword,
        sideBarToggle,
        setSideBarToggle,
      }}
    >
      {children}
    </DiaryContext.Provider>
  );
};

export { DiaryContext, DiaryProvider };
