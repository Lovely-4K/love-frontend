import { PropsWithChildren, createContext, useState } from 'react';

interface DiaryContextProps {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  sideBarToggle: boolean;
  setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiaryContext = createContext<DiaryContextProps | null>(null);

const DiaryProvider = ({ children }: PropsWithChildren) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sideBarToggle, setSideBarToggle] = useState(true);

  return (
    <DiaryContext.Provider
      value={{
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
