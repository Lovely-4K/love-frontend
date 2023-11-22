import { PropsWithChildren, createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Diary } from '~/types';
import useGetDiaryDetail from '~/services/Diary/useGetDiaryDetail';

interface DiaryContentContextProps {
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  diary: Diary | undefined;
  spotId: string | undefined;
  diaryId: string | undefined;
}

interface DiaryContentProviderParams extends PropsWithChildren {
  mode: 'read' | 'create' | 'edit';
}
const DiaryContentContext = createContext({} as DiaryContentContextProps);

const DiaryContentProvider = ({
  mode,
  children,
}: DiaryContentProviderParams) => {
  const params = useParams();
  const [editable, setEditable] = useState(
    mode === 'create' || mode === 'edit',
  );
  const { spotId, diaryId } = params;
  const { data: diary } = useGetDiaryDetail({ diaryId });

  return (
    <DiaryContentContext.Provider
      value={{
        editable,
        setEditable,
        diary,
        spotId,
        diaryId,
      }}
    >
      {children}
    </DiaryContentContext.Provider>
  );
};

export { DiaryContentContext, DiaryContentProvider };
