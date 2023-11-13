import { PropsWithChildren, createContext, useState } from 'react';

interface DiarySideBarContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiarySideBarContext = createContext({} as DiarySideBarContextProps);

const DiarySideBarProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <DiarySideBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DiarySideBarContext.Provider>
  );
};

export { DiarySideBarContext, DiarySideBarProvider };
