import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { ChangeEvent } from 'react';
import type { Pictures, DiaryResponse, DiaryEditRequest } from '~/types';

interface useDiaryContentParams {
  diary: DiaryResponse | DiaryEditRequest;
  setDiary: React.Dispatch<
    React.SetStateAction<DiaryResponse | DiaryEditRequest>
  >;
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
}

const useDiaryContent = ({
  diary,
  setDiary,
  setEditable,
}: useDiaryContentParams) => {
  const handleChangeDatingDay = (event: ChangeEvent<HTMLInputElement>) => {
    if (!diary) return;

    const { value } = event.target;

    setDiary({
      ...diary,
      datingDay: value,
    });
  };

  const handleChangeMyText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (!diary) return;
    if (event.target instanceof HTMLTextAreaElement) {
      const { value } = event.target;

      setDiary({
        ...diary,
        myText: value,
      });
    }
  };

  const handleChangeCategory = (category: categoryType) => {
    if (!diary) return;

    setDiary({
      ...diary,
      category,
    });
  };

  const handleChangePictures = (pictures: Pictures) => {
    if (!diary) return;

    setDiary({
      ...diary,
      pictures,
    });
  };

  const handleChangeScore = (score: number) => {
    if (!diary) return;

    setDiary({
      ...diary,
      score,
    });
  };

  const handleEditMode = () => {
    setEditable(true);
  };

  const handleSubmitForm = () => {
    setEditable(false);
  };

  const handleEditCancel = () => {
    setEditable(false);
  };

  return {
    handleEditCancel,
    handleEditMode,
    handleSubmitForm,
    handleChangeDatingDay,
    handleChangeMyText,
    handleChangeScore,
    handleChangeCategory,
    handleChangePictures,
  };
};

export default useDiaryContent;
