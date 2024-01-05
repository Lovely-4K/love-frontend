import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { editableAtom } from '~/stores/diaryContentAtoms';

interface useInitDiaryContentProps {
  editable: boolean;
}

const useInitDiaryContent = ({ editable }: useInitDiaryContentProps) => {
  const setEditable = useSetAtom(editableAtom);

  useEffect(() => {
    setEditable(editable);
  }, [editable, setEditable]);
};

export default useInitDiaryContent;
