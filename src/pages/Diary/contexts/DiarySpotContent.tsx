import { PropsWithChildren, createContext } from 'react';

interface DiarySpotContextProps {}

const DiarySpotContext = createContext({} as DiarySpotContextProps);

const DiarySpotProvider = ({ children }: PropsWithChildren) => {
  return (
    <DiarySpotContext.Provider value={{}}>{children}</DiarySpotContext.Provider>
  );
};

export { DiarySpotContext, DiarySpotProvider };
