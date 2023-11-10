import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface DiarySpotContextProps {
  pictures: string[];
  deleteMode: boolean;
  setDeleteMode: React.Dispatch<SetStateAction<boolean>>;
  handleDeleteMode: () => void;
}

const DiarySpotContext = createContext({} as DiarySpotContextProps);

const DiarySpotProvider = ({ children }: PropsWithChildren) => {
  const pictures = [
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
  ] as string[];

  const [deleteMode, setDeleteMode] = useState(false);

  const handleDeleteMode = () => {
    setDeleteMode(!deleteMode);
  };

  return (
    <DiarySpotContext.Provider
      value={{ pictures, deleteMode, setDeleteMode, handleDeleteMode }}
    >
      {children}
    </DiarySpotContext.Provider>
  );
};

export { DiarySpotContext, DiarySpotProvider };
