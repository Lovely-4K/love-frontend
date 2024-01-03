import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGetDiaryDetail from '~/services/diary/useGetDiaryDetail';
import { setOriginDiaryAtom, editableAtom } from '~/stores/diaryContentAtoms';

interface useInitDiaryContentProps {
  editable: boolean;
}

const useInitDiaryContent = ({ editable }: useInitDiaryContentProps) => {
  const setEditable = useSetAtom(editableAtom);
  const setOriginDiary = useSetAtom(setOriginDiaryAtom);
  const params = useParams();
  const { diaryId } = params;
  const { data } = useGetDiaryDetail({ diaryId });

  useEffect(() => {
    setEditable(editable);

    if (diaryId) {
      setOriginDiary(data);
    }
  }, []);
};

export default useInitDiaryContent;
