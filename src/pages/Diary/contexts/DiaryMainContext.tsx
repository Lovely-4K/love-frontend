import { PropsWithChildren, createContext } from 'react';

interface DiaryMainContextProps {}

const DiaryMainContext = createContext({} as DiaryMainContextProps);

const DiaryMainProvider = ({ children }: PropsWithChildren) => {
  return (
    <DiaryMainContext.Provider value={{}}>{children}</DiaryMainContext.Provider>
  );
};

export { DiaryMainContext, DiaryMainProvider };
