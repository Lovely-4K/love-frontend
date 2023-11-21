import { PropsWithChildren, createContext, useState } from 'react';

interface DiaryContentContextProps {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiaryContentContext = createContext({} as DiaryContentContextProps);

const DiaryContentProvider = ({ children }: PropsWithChildren) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <DiaryContentContext.Provider
      value={{
        editMode,
        setEditMode,
      }}
    >
      {children}
    </DiaryContentContext.Provider>
  );
};

export { DiaryContentContext, DiaryContentProvider };
