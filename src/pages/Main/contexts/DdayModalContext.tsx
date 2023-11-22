import {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useMain, useProfile } from '../hooks';
import { useEditCoupleProfile } from '~/services/couple';

interface DdayModalContextProps {
  editDday: string;
  handleDdayChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEditDday: () => void;
}

const DdayModalContext = createContext<DdayModalContextProps | null>(null);

const DdayModalProvider = ({ children }: PropsWithChildren) => {
  const { coupleProfile } = useMain();
  const [editDday, setEditDday] = useState(coupleProfile.meetDay);
  const editCoupleProfileQuery = useEditCoupleProfile();
  const { closeDdayModal } = useProfile();

  const handleDdayChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEditDday(event.target.value);
    },
    [],
  );

  const handleEditDday = useCallback(() => {
    editCoupleProfileQuery.mutate(editDday);

    closeDdayModal();
  }, [closeDdayModal, editCoupleProfileQuery, editDday]);

  const value = useMemo(
    () => ({
      editDday,
      handleDdayChange,
      handleEditDday,
    }),
    [editDday, handleDdayChange, handleEditDday],
  );

  return (
    <DdayModalContext.Provider value={value}>
      {children}
    </DdayModalContext.Provider>
  );
};

export { DdayModalContext, DdayModalProvider };
