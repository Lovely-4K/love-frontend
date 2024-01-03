import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent } from 'react';
import { setEditDiaryPropertyAtom } from '~/stores/diaryContentAtoms';
import {
  editableAtom,
  getCurrentModeDiaryAtom,
} from '~/stores/diaryContentAtoms';

const useDiaryForm = () => {
  const editable = useAtomValue(editableAtom);
  const diary = useAtomValue(getCurrentModeDiaryAtom);

  const setEditDiaryProperty = useSetAtom(setEditDiaryPropertyAtom);

  const handleChangeDatingDay = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEditDiaryProperty({ datingDay: value });
  };

  const handleChangeScore = (score: number) => {
    setEditDiaryProperty({ score });
  };

  const handleChangeCategory = (category: categoryType) => {
    setEditDiaryProperty({ category });
  };

  return {
    editable,
    diary,
    handleChangeDatingDay,
    handleChangeScore,
    handleChangeCategory,
  };
};

export default useDiaryForm;
