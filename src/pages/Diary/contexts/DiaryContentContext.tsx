import { PropsWithChildren, createContext, useState } from 'react';

interface DiaryContentContextProps {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditMode: () => void;
  handleEditComplete: () => void;
  handleEditCancel: () => void;
}

const DiaryContentContext = createContext<DiaryContentContextProps | null>(
  null,
);

const DiaryContentProvider = ({ children }: PropsWithChildren) => {
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(true);
  };

  const handleEditComplete = () => {
    setEditMode(false);
  };

  const handleEditCancel = () => {
    setEditMode(false);
  };

  return (
    <DiaryContentContext.Provider
      value={{
        editMode,
        setEditMode,
        handleEditMode,
        handleEditComplete,
        handleEditCancel,
      }}
    >
      {children}
    </DiaryContentContext.Provider>
  );
};

export { DiaryContentContext, DiaryContentProvider };
