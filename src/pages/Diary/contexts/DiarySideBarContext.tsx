import { PropsWithChildren, createContext, useState } from 'react';

interface DiarySideBarContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSideBar: () => void;
}

const DiarySideBarContext = createContext({} as DiarySideBarContextProps);

const DiarySideBarProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DiarySideBarContext.Provider value={{ isOpen, setIsOpen, toggleSideBar }}>
      {children}
    </DiarySideBarContext.Provider>
  );
};

export { DiarySideBarContext, DiarySideBarProvider };
