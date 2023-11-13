import { PropsWithChildren, createContext, useState } from 'react';
import { useMain } from '../hooks';

interface DdayModalContextProps {
  editDday: string;
  setEditDday: React.Dispatch<React.SetStateAction<string>>;
}

const DdayModalContext = createContext<DdayModalContextProps | null>(null);

const DdayModalProvider = ({ children }: PropsWithChildren) => {
  const { coupleProfile } = useMain();
  const [editDday, setEditDday] = useState(coupleProfile.meetDay);

  return (
    <DdayModalContext.Provider value={{ editDday, setEditDday }}>
      {children}
    </DdayModalContext.Provider>
  );
};

export { DdayModalContext, DdayModalProvider };
