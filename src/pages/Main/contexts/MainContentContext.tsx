import { PropsWithChildren, createContext } from 'react';

const MainContentContext = createContext(null);

const MainContentProvider = ({ children }: PropsWithChildren) => {
  return (
    <MainContentContext.Provider value={null}>
      {children}
    </MainContentContext.Provider>
  );
};

export { MainContentContext, MainContentProvider };
