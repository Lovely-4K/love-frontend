import { useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { useEffect } from 'react';
import { editableAtom, editDiaryAtom } from '~/stores/diaryContentAtoms';

interface useInitDiaryContentProps {
  editable: boolean;
}

const useInitDiaryContent = ({ editable }: useInitDiaryContentProps) => {
  const setEditable = useSetAtom(editableAtom);
  const resetDiaryAtom = useResetAtom(editDiaryAtom);

  useEffect(() => {
    setEditable(editable);
  }, [editable, setEditable, resetDiaryAtom]);

  useEffect(() => {
    return () => {
      setEditable(false);
      resetDiaryAtom();
    };
  }, []);
};

export default useInitDiaryContent;
