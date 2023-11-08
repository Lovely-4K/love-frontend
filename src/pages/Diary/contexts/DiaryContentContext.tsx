import { PropsWithChildren, createContext } from 'react';

interface DiaryContentContextProps {}

const DiaryContentContext = createContext({} as DiaryContentContextProps);

const DiaryContentProvider = ({ children }: PropsWithChildren) => {
  return (
    <DiaryContentContext.Provider value={{}}>
      {children}
    </DiaryContentContext.Provider>
  );
};

export { DiaryContentContext, DiaryContentProvider };
